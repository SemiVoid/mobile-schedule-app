import {
  ModalActionTypes,
  TOGGLE_LOGIN_MODAL,
  TOGGLE_REGISTER_MODAL,
  TOGGLE_ADD_EMPLOYEE_MODAL,
} from './modalTypes';

export const toggleLogin = (): ModalActionTypes => {
  return {
    type: TOGGLE_LOGIN_MODAL,
  };
};

export const toggleRegister = (): ModalActionTypes => {
  return {
    type: TOGGLE_REGISTER_MODAL,
  };
};

export const toggleAddEmployee = (): ModalActionTypes => {
  return {
    type: TOGGLE_ADD_EMPLOYEE_MODAL,
  };
};
