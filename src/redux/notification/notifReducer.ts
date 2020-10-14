import {
  NotifState,
  NotifActionTypes,
  NOTIF_SEND,
  NOTIF_DISMISS,
} from './notifTypes';

const notifInitState: NotifState = {
  notifLoading: false,
  notifToast: false,
  notifAlert: false,
};

const notifReducer = (
  state = notifInitState,
  action: NotifActionTypes
): NotifState => {
  switch (action.type) {
    case NOTIF_SEND: {
      return {
        ...state,
        [action.payload.notifType]: true,
        cssClass: action.payload.cssClass,
        header: action.payload.header,
        message: action.payload.message,
      };
    }
    case NOTIF_DISMISS: {
      return {
        ...state,
        [action.payload.notifType]: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default notifReducer;
