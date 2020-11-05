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
