import { auth } from '../../../config/firebase';
import { modalClose } from '../../modal/modalActions';
import { notifDismiss, notifSend } from '../../notification/notifActions';
import { AppThunk } from '../../rootReducer';
import { accountUpdateFail, accountUpdateSuccess } from '../authActions';

export const updateName = (): AppThunk => {
  return (dispatch, getState) => {
    dispatch(notifSend({ notifType: 'notifLoading' }));
    if (auth.currentUser) {
      auth.currentUser
        .updateProfile({ displayName: getState().auth.displayName })
        .then(() => {
          dispatch(modalClose({ modalName: 'accountUpdate' }));
          dispatch(
            notifSend({
              notifType: 'notifToast',
              header: 'Account Update Success',
              message: 'Name Successfully Updated',
            })
          );
          dispatch(accountUpdateSuccess());
        })
        .catch((error) => {
          dispatch(
            notifSend({
              notifType: 'notifToast',
              header: 'Account Update Error',
              message: error.message,
            })
          );
          dispatch(accountUpdateFail());
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
        .updateEmail(getState().auth.email as string)
        .then(() => {
          dispatch(modalClose({ modalName: 'accountUpdate' }));
          dispatch(
            notifSend({
              notifType: 'notifToast',
              header: 'Account Update Success',
              message: 'Email Successfully Updated',
            })
          );
          dispatch(accountUpdateSuccess());
        })
        .catch((error) => {
          dispatch(
            notifSend({
              notifType: 'notifToast',
              header: 'Account Update Error',
              message: error.message,
            })
          );
          dispatch(accountUpdateFail());
        })
        .finally(() => {
          dispatch(notifDismiss({ notifType: 'notifLoading' }));
        });
    }
  };
};

export const updatePassword = (): AppThunk => {
  return (dispatch, getState) => {
    if (getState().auth.password === getState().auth.verifyPassword) {
      dispatch(notifSend({ notifType: 'notifLoading' }));
      if (auth.currentUser) {
        auth.currentUser
          .updatePassword(getState().auth.password as string)
          .then(() => {
            dispatch(modalClose({ modalName: 'accountUpdate' }));
            dispatch(
              notifSend({
                notifType: 'notifToast',
                header: 'Account Update Success',
                message: 'Password Successfully Updated',
              })
            );
            dispatch(accountUpdateSuccess());
          })
          .catch((error) => {
            dispatch(
              notifSend({
                notifType: 'notifToast',
                header: 'Account Update Error',
                message: error.message,
              })
            );
            dispatch(accountUpdateFail());
          })
          .finally(() => {
            dispatch(notifDismiss({ notifType: 'notifLoading' }));
          });
      }
    } else {
      dispatch(
        notifSend({
          notifType: 'notifToast',
          header: 'Account Update Error',
          message: 'Passwords do not match',
        })
      );
      dispatch(accountUpdateFail());
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
              header: 'Account Delete Error',
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
