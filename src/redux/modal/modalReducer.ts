import {
  ModalState,
  ModalActionTypes,
  MODAL_OPEN,
  MODAL_CLOSE,
} from './modalTypes';

const modalInitState: ModalState = {
  userAuth: false,
  accountUpdate: false,
  employeeAdd: false,
  scheduleAdd: false,
};

const modalReducer = (
  state = modalInitState,
  action: ModalActionTypes
): ModalState => {
  switch (action.type) {
    case MODAL_OPEN: {
      return {
        ...state,
        [action.payload.modalName]: true,
      };
    }
    case MODAL_CLOSE: {
      return {
        ...state,
        [action.payload.modalName]: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
