import {
  ModalActionTypes,
  ModalPayload,
  MODAL_OPEN,
  MODAL_CLOSE
} from './modalTypes';

export const modalOpen = (payload: ModalPayload): ModalActionTypes => {
  return {
    type: MODAL_OPEN,
    payload: payload,
  };
};

export const modalClose = (payload: ModalPayload): ModalActionTypes => {
  return {
    type: MODAL_CLOSE,
    payload: payload,
  };
};
