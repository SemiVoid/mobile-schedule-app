export const USER_ACCOUNT = 'USER_ACCOUNT';
export const USER_INPUT = 'USER_INPUT';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';
export const ACCOUNT_UPDATE_SUCCESS = 'ACCOUNT_UPDATE_SUCCESS';
export const ACCOUNT_UPDATE_FAIL = 'ACCOUNT_UPDATE_FAIL';

export interface AuthState {
  displayName: string;
  email: string;
  password: string;
  verifyPassword: string;
  account?: firebase.User;
}

export interface AccountPayload {
  account?: firebase.User;
}

export type fieldType = 'displayName' | 'email' | 'password' | 'verifyPassword';

export interface InputPayload {
  field: fieldType;
  value: string;
}

interface UserAccountAction {
  type: typeof USER_ACCOUNT;
  payload: AccountPayload;
}

interface UserInputAction {
  type: typeof USER_INPUT;
  payload: InputPayload;
}

interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
}

interface UserLoginFailAction {
  type: typeof USER_LOGIN_FAIL;
}

interface UserRegisterSuccessAction {
  type: typeof USER_REGISTER_SUCCESS;
}

interface UserRegisterFailAction {
  type: typeof USER_REGISTER_FAIL;
}

interface AccountUpdateSuccessAction {
  type: typeof ACCOUNT_UPDATE_SUCCESS;
}

interface AccountUpdateFailAction {
  type: typeof ACCOUNT_UPDATE_FAIL;
}

export type AuthActionTypes =
  | UserAccountAction
  | UserInputAction
  | UserLoginSuccessAction
  | UserLoginFailAction
  | UserRegisterSuccessAction
  | UserRegisterFailAction
  | AccountUpdateSuccessAction
  | AccountUpdateFailAction;
