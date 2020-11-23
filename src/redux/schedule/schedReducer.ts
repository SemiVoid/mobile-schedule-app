import moment from 'moment';
import {
  DATE_CHANGE,
  SchedActionTypes,
  SchedState,
  SCHED_CHANGE,
  SCHED_SET,
  WEEK_INDEX,
  WEEK_UPDATE,
} from './schedTypes';

const schedInitState: SchedState = {
  list: [],
  listTemp: [],
  listFiltered: [],
  weekIndex: 0,
  weekLayout: {
    todaysDate: moment()
      .day(0)
      .hour(0)
      .minute(0)
      .second(0)
      .millisecond(0)
      .toDate(),
    weekList: [],
  },
  changesMade: false,
  worksToday: 0,
};

const schedReducer = (
  state = schedInitState,
  action: SchedActionTypes
): SchedState => {
  switch (action.type) {
    case SCHED_SET: {
      return {
        ...state,
        [action.payload.listType]: action.payload.list,
      };
    }
    case SCHED_CHANGE: {
      return {
        ...state,
        changesMade: action.payload.change,
      };
    }
    case DATE_CHANGE: {
      return {
        ...state,
        currentDay: action.payload.date,
      };
    }
    case WEEK_UPDATE: {
      return {
        ...state,
        weekLayout: action.payload.weekLayout,
      };
    }
    case WEEK_INDEX: {
      return {
        ...state,
        weekIndex: action.payload.index,
      };
    }
    default: {
      return state;
    }
  }
};

export default schedReducer;
