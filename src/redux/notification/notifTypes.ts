export const NOTIF_SEND = 'NOTIF_SEND';
export const NOTIF_DISMISS = 'NOTIF_DISMISS';

export interface NotifState {
  notifLoading: boolean;
  notifToast: boolean;
  notifAlert: boolean;
  cssClass?: string;
  header?: string;
  message?: string;
}

export type NotifType = 'notifLoading' | 'notifToast' | 'notifAlert';

export interface SendPayload {
  notifType: NotifType;
  cssClass?: string;
  header?: string;
  message?: string;
}

export interface DismissPayload {
  notifType: NotifType;
}

interface NotifSendAction {
  type: typeof NOTIF_SEND;
  payload: SendPayload;
}

interface NotifDismissAction {
  type: typeof NOTIF_DISMISS;
  payload: DismissPayload;
}

export type NotifActionTypes = NotifSendAction | NotifDismissAction;
