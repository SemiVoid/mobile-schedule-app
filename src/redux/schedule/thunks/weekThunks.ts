import moment from 'moment';
import { AppThunk } from '../../rootReducer';
import { weekIndex, weekUpdate } from '../schedActions';

export const weekCalculate = (): AppThunk => {
  return (dispatch, state) => {
    const today = moment().day(0).hour(0).minute(0).second(0).millisecond(0);
    const currentWeekIndex = state().sched.weekIndex;

    const tempToday = today.toDate();
    const tempWeekList: Date[] = [];

    const startDay = today.add(currentWeekIndex * 7, 'd');

    for (let i = 0; i < 7; i++) {
      tempWeekList.push(startDay.toDate());
      startDay.add(1, 'd');
    }

    dispatch(
      weekUpdate({
        weekLayout: {
          todaysDate: tempToday,
          weekList: tempWeekList,
        },
      })
    );
  };
};

export const weekNext = (): AppThunk => {
  return (dispatch, state) => {
    dispatch(weekIndex({ index: (state().sched.weekIndex + 1) }));
  };
};

export const weekPrev = (): AppThunk => {
  return (dispatch, state) => {
    dispatch(weekIndex({ index: (state().sched.weekIndex - 1) }));
  };
};

export const weekReset = (): AppThunk => {
  return (dispatch) => {
    dispatch(weekIndex({ index: 0 }));
  };
};
