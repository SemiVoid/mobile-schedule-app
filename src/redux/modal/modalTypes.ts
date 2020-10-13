export const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';
export const TOGGLE_REGISTER_MODAL = 'TOGGLE_REGISTER_MODAL';
export const TOGGLE_ADD_EMPLOYEE_MODAL = 'TOGGLE_ADD_EMPLOYEE_MODAL';

export interface ModalState {
  modalLogin: boolean;
  modalRegister: boolean;
  modalAddEmployee: boolean;
}

interface ToggleLoginModalAction {
  type: typeof TOGGLE_LOGIN_MODAL;
}

interface ToggleRegisterModalAction {
  type: typeof TOGGLE_REGISTER_MODAL;
}

interface ToggleAddEmployeeModalAction {
  type: typeof TOGGLE_ADD_EMPLOYEE_MODAL;
}

export type ModalActionTypes =
  | ToggleLoginModalAction
  | ToggleRegisterModalAction
  | ToggleAddEmployeeModalAction;
