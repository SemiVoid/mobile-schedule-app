export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export interface ModalState {
  login: boolean;
  register: boolean;
  addEmployee: boolean;
}

export type Modals = 'login' | 'register' | 'addEmployee';

export interface ModalPayload {
  modalName: Modals;
}

interface ModalOpenAction {
  type: typeof MODAL_OPEN;
  payload: ModalPayload;
}

interface ModalCloseAction {
  type: typeof MODAL_CLOSE;
  payload: ModalPayload;
}

export type ModalActionTypes = ModalOpenAction | ModalCloseAction;
