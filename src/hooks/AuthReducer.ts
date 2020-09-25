export interface AuthStateType {
  email: string;
  password: string;
  error: string;
}

export type AuthActionType =
  | { type: 'input'; field: string; fieldValue: string }
  | { type: 'error'; errorVal: string }
  | { type: 'resetEmail' }
  | { type: 'resetPass' };

export const AuthInitState: AuthStateType = {
  email: '',
  password: '',
  error: '',
};

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
    default:
      return state;
  }
};
