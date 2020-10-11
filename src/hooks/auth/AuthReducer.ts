// Auth State Type
export interface AuthStateType {
  email: string;
  password: string;
  verifyPassword: string;
  error: string;
}

// Auth Action Type
export type AuthActionType =
  | { type: 'input'; field: string; fieldValue: string }
  | { type: 'error'; errorVal: string }
  | { type: 'resetEmail' }
  | { type: 'resetPass' }
  | { type: 'resetVerifyPass' };

// Auth Initial State
export const AuthInitState: AuthStateType = {
  email: '',
  password: '',
  verifyPassword: '',
  error: '',
};

// Auth Reducer
export const AuthReducer = (
  state: AuthStateType,
  action: AuthActionType
): AuthStateType => {
  switch (action.type) {
    case 'input': {
      return {
        ...state,
        [action.field]: action.fieldValue,
      };
    }
    case 'error': {
      return {
        ...state,
        error: action.errorVal,
      };
    }
    case 'resetEmail': {
      return {
        ...state,
        email: '',
      };
    }
    case 'resetPass': {
      return {
        ...state,
        password: '',
      };
    }
    case 'resetVerifyPass': {
      return {
        ...state,
        verifyPassword: '',
      };
    }
    default:
      return state;
  }
};
