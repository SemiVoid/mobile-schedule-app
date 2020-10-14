import {
  ModalState,
  ModalActionTypes,
  MODAL_OPEN,
  MODAL_CLOSE
} from './modalTypes';

const modalInitState: ModalState = {
  login: false,
  register: false,
  addEmployee: false,
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
