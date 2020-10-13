import {
  NotifActionTypes,
  ToastPayload,
  AlertPayload,
  NOTIF_IS_LOADING,
  NOTIF_SEND_TOAST,
  NOTIF_SEND_ALERT,
  NOTIF_DISMISS,
  NOTIF_LOADING_DISMISS
} from './notifTypes';

export const isLoading = (): NotifActionTypes => {
  return {
    type: NOTIF_IS_LOADING,
  };
};

export const sendToast = (toast: ToastPayload): NotifActionTypes => {
  return {
    type: NOTIF_SEND_TOAST,
    payload: toast,
  };
};

export const sendAlert = (alert: AlertPayload): NotifActionTypes => {
  return {
    type: NOTIF_SEND_ALERT,
    payload: alert,
  };
};

export const notifDismiss = (): NotifActionTypes => {
  return {
    type: NOTIF_DISMISS,
  };
};

export const notifLoadingDismiss = (): NotifActionTypes => {
  return {
    type: NOTIF_LOADING_DISMISS,
  };
};
