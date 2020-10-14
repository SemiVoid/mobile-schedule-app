import {
  NotifActionTypes,
  SendPayload,
  DismissPayload,
  NOTIF_SEND,
  NOTIF_DISMISS
} from './notifTypes';

export const notifSend = (notifPayload: SendPayload): NotifActionTypes => {
  return {
    type: NOTIF_SEND,
    payload: notifPayload,
  };
};

export const notifDismiss = (notifPayload: DismissPayload): NotifActionTypes => {
  return {
    type: NOTIF_DISMISS,
    payload: notifPayload,
  };
};
