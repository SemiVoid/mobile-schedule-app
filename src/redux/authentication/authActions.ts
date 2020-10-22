import { auth, db } from '../../config/firebase';
import { AppThunk } from '../rootReducer';
import {
  AuthActionTypes,
  InputPayload,
  AccountPayload,
  USER_ACCOUNT,
  USER_INPUT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from './authTypes';
import { modalClose, notifSend, notifDismiss } from '../../redux';

export const userAccount = (account: AccountPayload): AuthActionTypes => {
  return {
    type: USER_ACCOUNT,
    payload: account,
  };
};

export const userInput = (input: InputPayload): AuthActionTypes => {
  return {
    type: USER_INPUT,
    payload: input,
  };
};

export const userLoginSuccess = (): AuthActionTypes => {
  return {
    type: USER_LOGIN_SUCCESS,
  };
};

export const userLoginFail = (): AuthActionTypes => {
  return {
    type: USER_LOGIN_FAIL,
  };
};

export const userRegisterSuccess = (): AuthActionTypes => {
  return {
    type: USER_REGISTER_SUCCESS,
  };
};

export const userRegisterFail = (): AuthActionTypes => {
  return {
    type: USER_REGISTER_FAIL,
  };
};

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
        dispatch(modalClose({ modalName: 'login' }));
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
          db.doc(`/users/${data.user?.uid}`).set({createdAt: new Date()});
          dispatch(userRegisterSuccess());
          dispatch(modalClose({ modalName: 'register' }));
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
    });
  };
};
