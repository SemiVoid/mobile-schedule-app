import { AppThunk } from '../../rootReducer';
import { auth, db } from '../../../config/firebase';
import {
  userAccount,
  userLoginFail,
  userLoginSuccess,
  userRegisterFail,
  userRegisterSuccess,
} from '../authActions';
import { emplSet } from '../../employee/employeeAction';
import { notifDismiss, notifSend } from '../../notification/notifActions';
import { schedSet } from '../../schedule/schedActions';

export const userLogin = (): AppThunk => {
  return (dispatch, getState) => {
    dispatch(notifSend({ notifType: 'notifLoading' }));
    auth
      .signInWithEmailAndPassword(
        getState().auth.email,
        getState().auth.password
      )
      .then(() => {
        dispatch(userLoginSuccess());
      })
      .catch((error) => {
        dispatch(userLoginFail());
        dispatch(
          notifSend({
            notifType: 'notifToast',
            header: 'Login Error',
            message: error.message,
          })
        );
      })
      .finally(() => {
        dispatch(notifDismiss({ notifType: 'notifLoading' }));
      });
  };
};

export const userRegister = (): AppThunk => {
  return (dispatch, getState) => {
    if (getState().auth.password === getState().auth.verifyPassword) {
      dispatch(notifSend({ notifType: 'notifLoading' }));
      auth
        .createUserWithEmailAndPassword(
          getState().auth.email,
          getState().auth.password
        )
        .then((data) => {
          db.doc(`/users/${data.user?.uid}`).set({ createdAt: new Date() });
          db.doc(`/users/${data.user?.uid}/employees/test`).set({
            workers: [],
          });
          db.doc(`/users/${data.user?.uid}/schedules/test`).set({
            schedules: [],
          });
          data.user?.updateProfile({
            displayName: getState().auth.displayName,
          });
          dispatch(userRegisterSuccess());
        })
        .catch((error) => {
          dispatch(userRegisterFail());
          dispatch(
            notifSend({
              notifType: 'notifToast',
              header: 'Registration Error',
              message: error.message,
            })
          );
        })
        .finally(() => {
          dispatch(notifDismiss({ notifType: 'notifLoading' }));
        });
    } else {
      dispatch(
        notifSend({
          notifType: 'notifToast',
          header: 'Registration Error',
          message: 'Passwords do not match',
        })
      );
      dispatch(userRegisterFail());
    }
  };
};

export const userLogout = (): AppThunk => {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch(userAccount({ account: undefined }));
      dispatch(emplSet({ list: [], listType: 'origEmplList' }));
      dispatch(schedSet({ list: [], listType: 'list' }));
    });
  };
};
