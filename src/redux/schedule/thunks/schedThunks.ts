import { tempScheduleList } from '../../../hooks/tempdata';
import { AppThunk } from '../../rootReducer';
import { dateChange, schedSet } from '../schedActions';
import { SchedListType } from '../schedTypes';

export const schedFetch = (type: SchedListType): AppThunk => {
  return (dispatch, state) => {
    if (type === 'list') {
      dispatch(schedSet({ listType: type, list: [...tempScheduleList] }));
    }
    if (type === 'listTemp') {
      dispatch(schedSet({ listType: type, list: [...state().sched.list] }));
    }
  };
};

export const schedFilter = (date: Date): AppThunk => {
  return (dispatch, state) => {
    if (state().sched.list) {
      dispatch(dateChange({ date: date }));
      const filter = state().sched.listTemp.filter(
        (data) => data.date.valueOf() === date.valueOf()
      );
      dispatch(schedSet({ listType: 'listFiltered', list: [...filter] }));
    }
  };
};
