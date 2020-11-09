import {
  AuthState,
  AuthActionTypes,
  USER_ACCOUNT,
  USER_INPUT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from './authTypes';

const authInitState: AuthState = {
  displayName: '',
  email: '',
  password: '',
  verifyPassword: '',
};

const authReducer = (
  state = authInitState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case USER_ACCOUNT: {
      return {
        ...state,
        account: action.payload.account,
      };
    }
    case USER_INPUT: {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        email: '',
        password: '',
      };
    }
    case USER_LOGIN_FAIL: {
      return {
        ...state,
        password: '',
      };
    }
    case USER_REGISTER_SUCCESS: {
      return {
        ...state,
        displayName: '',
        email: '',
        password: '',
        verifyPassword: '',
      };
    }
    case USER_REGISTER_FAIL: {
      return {
        ...state,
        password: '',
        verifyPassword: '',
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
