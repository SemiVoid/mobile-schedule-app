import {
  EmplActionTypes,
  EmplState,
  EMPL_CHANGE,
  EMPL_SET,
} from './employeeType';

const emplInitState: EmplState = {
  origEmplList: [],
  employeeList: [],
  changesMade: false,
  numberOfEmpl: 0,
};

const emplReducer = (
  state = emplInitState,
  action: EmplActionTypes
): EmplState => {
  switch (action.type) {
    case EMPL_SET: {
      return {
        ...state,
        [action.payload.listType]: action.payload.list,
      };
    }
    case EMPL_CHANGE: {
      return {
        ...state,
        [action.payload.variable]: action.payload.value,
      };
    }
    default: {
      return state;
    }
  }
};

export default emplReducer;
