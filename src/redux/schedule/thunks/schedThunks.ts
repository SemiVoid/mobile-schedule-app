import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../../config/firebase';
import { notifSend } from '../../notification/notifActions';
import { AppThunk } from '../../rootReducer';
import { dateChange, schedChange, schedSet } from '../schedActions';
import { SchedListType, ScheduleType } from '../schedTypes';

export const schedFetch = (type: SchedListType): AppThunk => {
  return (dispatch, state) => {
    if (type === 'list') {
      if (state().auth.account !== undefined) {
        db.doc(`/users/${state().auth.account?.uid}`)
          .collection('schedules')
          .doc('test')
          .get()
          .then((doc) => {
            if (doc.exists) {
              dispatch(
                schedSet({ listType: type, list: [...doc.data()?.schedules] })
              );
            }
          });
      }
    }
    if (type === 'listTemp') {
      dispatch(schedChange({ change: false }));
      dispatch(schedSet({ listType: type, list: [...state().sched.list] }));
    }
  };
};

export const schedFilter = (date: Date): AppThunk => {
  return (dispatch, state) => {
    if (state().sched.list) {
      dispatch(dateChange({ date: date }));
      const filter = state().sched.listTemp.filter(
        (data) => moment(data.date).toString() === moment(date).toString()
      );
      dispatch(schedSet({ listType: 'listFiltered', list: [...filter] }));
    }
  };
};

export const schedAdd = (
  name: string,
  startTime: string,
  endTime: string,
  date: string
): AppThunk => {
  return (dispatch, state) => {
    if (name && startTime && endTime && date) {
      dispatch(schedChange({ change: true }));
      const newSchedule: ScheduleType = {
        id: uuidv4(),
        name: name,
        startTime: moment(startTime).format('LT'),
        endTime: moment(endTime).format('LT'),
        date: moment(date)
          .hour(0)
          .minute(0)
          .second(0)
          .millisecond(0)
          .toDate()
          .toString(),
      };
      dispatch(
        schedSet({
          listType: 'listTemp',
          list: [...state().sched.listTemp, newSchedule],
        })
      );
    }
  };
};

export const schedSend = (): AppThunk => {
  return (dispatch, state) => {
    if (state().auth.account !== undefined) {
      db.doc(`/users/${state().auth.account?.uid}`)
        .collection('schedules')
        .doc('test')
        .update({
          schedules: [...state().sched.listTemp],
        })
        .then(() => {
          dispatch(schedChange({ change: false }));
          dispatch(
            notifSend({
              notifType: 'notifToast',
              header: 'Schedule Changes Saved',
              message: 'Changes were saved to your profile',
            })
          );
        })
        .catch((err) => {
          dispatch(
            notifSend({
              notifType: 'notifToast',
              header: 'Schedule Submit Error',
              message: err.message,
            })
          );
        });
    }
  };
};
