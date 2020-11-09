import { AppThunk } from '../../rootReducer';
import { auth } from '../../../config/firebase';
import { notifDismiss, notifSend } from '../../notification/notifActions';
import { modalClose } from '../../modal/modalActions';

export const updateName = (): AppThunk => {
  return (dispatch, getState) => {
    dispatch(notifSend({ notifType: 'notifLoading' }));
    if (auth.currentUser) {
      auth.currentUser
        .updateProfile({ displayName: getState().auth.displayName })
        .then(() => {
          dispatch(modalClose({ modalName: 'accountUpdate' }));
        })
        .catch((error) => {
          dispatch(
            notifSend({
              notifType: 'notifToast',
              header: 'Account Update Error',
              message: error.message,
            })
          );
        })
        .finally(() => {
          dispatch(notifDismiss({ notifType: 'notifLoading' }));
        });
    }
  };
};

export const updateEmail = (): AppThunk => {
  return (dispatch, getState) => {
    dispatch(notifSend({ notifType: 'notifLoading' }));
    if (auth.currentUser) {
      auth.currentUser
        .updateEmail(getState().auth.displayName as string)
        .then(() => {
          dispatch(modalClose({ modalName: 'accountUpdate' }));
        })
        .catch((error) => {
          dispatch(
            notifSend({
              notifType: 'notifToast',
              header: 'Account Update Error',
              message: error.message,
            })
          );
        })
        .finally(() => {
          dispatch(notifDismiss({ notifType: 'notifLoading' }));
        });
    }
  };
};

export const accountDelete = (): AppThunk => {
  return (dispatch) => {
    if (auth.currentUser) {
      dispatch(notifSend({ notifType: 'notifLoading' }));
      auth.currentUser
        .delete()
        .catch((error) => {
          dispatch(
            notifSend({
              notifType: 'notifToast',
              header: 'Account Error',
              message: error.message,
            })
          );
        })
        .finally(() => {
          dispatch(notifDismiss({ notifType: 'notifLoading' }));
        });
    }
  };
};
