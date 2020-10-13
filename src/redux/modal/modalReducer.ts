import {
  ModalState,
  ModalActionTypes,
  TOGGLE_LOGIN_MODAL,
  TOGGLE_REGISTER_MODAL,
  TOGGLE_ADD_EMPLOYEE_MODAL,
} from './modalTypes';

const modalInitState: ModalState = {
  modalLogin: false,
  modalRegister: false,
  modalAddEmployee: false,
};

const modalReducer = (
  state = modalInitState,
  action: ModalActionTypes
): ModalState => {
  switch (action.type) {
    case TOGGLE_LOGIN_MODAL: {
      return {
        ...state,
        modalLogin: !state.modalLogin,
      };
    }
    case TOGGLE_REGISTER_MODAL: {
      return {
        ...state,
        modalRegister: !state.modalRegister,
      };
    }
    case TOGGLE_ADD_EMPLOYEE_MODAL: {
      return {
        ...state,
        modalAddEmployee: !state.modalAddEmployee,
      };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
