import { AppThunk } from '../../rootReducer';
import { auth } from '../../../config/firebase';
import { notifDismiss, notifSend } from '../../notification/notifActions';

export const accountUpdate = (): AppThunk => {
  return (dispatch, getState) => {
    dispatch(notifSend({ notifType: 'notifLoading' }));
    if (auth.currentUser) {
      auth.currentUser
        .updateProfile({ displayName: getState().auth.displayName })
        .then()
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
