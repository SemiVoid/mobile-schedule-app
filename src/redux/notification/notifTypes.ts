export const NOTIF_IS_LOADING = 'NOTIF_IS_LOADING';
export const NOTIF_SEND_TOAST = 'NOTIF_SEND_TOAST';
export const NOTIF_SEND_ALERT = 'NOTIF_SEND_ALERT';
export const NOTIF_DISMISS = 'NOTIF_DISMISS';
export const NOTIF_LOADING_DISMISS = 'NOTIF_LOADING_DISMISS';

export interface NotifState {
  notifLoading: boolean;
  notifToast: boolean;
  notifAlert: boolean;
  cssClass?: string;
  header?: string;
  message?: string;
  duration?: number;
}

export interface ToastPayload {
  cssClass?: string;
  header?: string;
  message?: string;
  duration?: number;
}

export interface AlertPayload {
  cssClass?: string;
  header?: string;
  message?: string;
  duration?: number;
}

interface NotifIsLoadingAction {
  type: typeof NOTIF_IS_LOADING;
}

interface NotifSendToastAction {
  type: typeof NOTIF_SEND_TOAST;
  payload: ToastPayload;
}

interface NotifSendAlertAction {
  type: typeof NOTIF_SEND_ALERT;
  payload: AlertPayload;
}

interface NotifDismissAction {
  type: typeof NOTIF_DISMISS;
}

interface NotifLoadingDismissAction {
  type: typeof NOTIF_LOADING_DISMISS;
}

export type NotifActionTypes =
  | NotifIsLoadingAction
  | NotifSendToastAction
  | NotifSendAlertAction
  | NotifDismissAction
  | NotifLoadingDismissAction;
