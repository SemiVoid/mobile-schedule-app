import { EmplState, EmplActionTypes, EMPL_SET } from './employeeType';

const emplInitState: EmplState = {
  employeeList: [],
};

const emplReducer = (
  state = emplInitState,
  action: EmplActionTypes
): EmplState => {
  switch (action.type) {
    case EMPL_SET: {
      return {
        ...state,
        employeeList: action.payload.list,
      };
    }
    default: {
      return state;
    }
  }
};

export default emplReducer;
