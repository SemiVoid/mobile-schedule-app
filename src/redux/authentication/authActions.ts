import { auth } from '../../config/firebase';
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
import { toggleLogin, toggleRegister } from '../modal/modalActions';

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
    auth
      .signInWithEmailAndPassword(
        getState().auth.email,
        getState().auth.password
      )
      .then(() => {
        dispatch(userLoginSuccess());
        dispatch(toggleLogin());
      })
      .catch((error) => {
        dispatch(userLoginFail());
      });
  };
};

export const userRegister = (): AppThunk => {
  return (dispatch, getState) => {
    if (getState().auth.password === getState().auth.verifyPassword) {
      auth
        .createUserWithEmailAndPassword(
          getState().auth.email,
          getState().auth.password
        )
        .then(() => {
          dispatch(userRegisterSuccess());
          dispatch(toggleRegister());
        })
        .catch((error) => {
          dispatch(userRegisterFail());
        });
    } else {
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
