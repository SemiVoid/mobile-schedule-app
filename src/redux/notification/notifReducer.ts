import {
  NotifState,
  NotifActionTypes,
  NOTIF_IS_LOADING,
  NOTIF_SEND_TOAST,
  NOTIF_SEND_ALERT,
  NOTIF_DISMISS,
  NOTIF_LOADING_DISMISS,
} from './notifTypes';

const notifInitState: NotifState = {
  notifLoading: false,
  notifToast: false,
  notifAlert: false,
  duration: 4000,
};

const notifReducer = (
  state = notifInitState,
  action: NotifActionTypes
): NotifState => {
  switch (action.type) {
    case NOTIF_IS_LOADING: {
      return {
        ...state,
        notifLoading: true,
      };
    }
    case NOTIF_SEND_TOAST: {
      return {
        ...state,
        cssClass: action.payload.cssClass,
        header: action.payload.header,
        message: action.payload.message,
        duration: action.payload.duration,
        notifToast: true,
      };
    }
    case NOTIF_SEND_ALERT: {
      return {
        ...state,
        cssClass: action.payload.cssClass,
        header: action.payload.header,
        message: action.payload.message,
        duration: action.payload.duration,
        notifAlert: true,
      };
    }
    case NOTIF_DISMISS: {
      return {
        ...state,
        notifToast: false,
        notifAlert: false,
        cssClass: undefined,
        header: undefined,
        message: undefined,
        duration: 4000,
      };
    }
    case NOTIF_LOADING_DISMISS: {
      return {
        ...state,
        notifLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default notifReducer;
