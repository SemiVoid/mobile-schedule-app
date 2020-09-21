export interface AuthStateType {
  account: firebase.User | undefined;
  email: string;
  password: string;
  loginError: string;
  signupError: string;
  isWaiting: boolean;
  isLoggedIn: boolean;
}

export type AuthActionType =
  | { type: 'input'; field: string; fieldValue: string }
  | { type: 'error'; error: string; errorValue: string }
  | { type: 'account'; user: firebase.User }
  | { type: 'login' }
  | { type: 'signup' }
  | { type: 'success' }
  | { type: 'logout' };

export const AuthInitState: AuthStateType = {
  account: undefined,
  email: '',
  password: '',
  loginError: '',
  signupError: '',
  isWaiting: false,
  isLoggedIn: false,
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
    case 'login': {
      return {
        ...state,
        isWaiting: true,
        password: '',
      };
    }
    case 'signup': {
      return {
        ...state,
        isWaiting: true,
      };
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
        signupError: '',
        loginError: '',
      };
    }
    case 'error': {
      return {
        ...state,
        [action.error]: action.errorValue,
      };
    }
    case 'logout': {
      return {
        ...state,
        isLoggedIn: false,
        account: undefined,
        email: '',
        password: '',
      };
    }
    case 'account': {
      return {
        ...state,
        account: action.user,
      };
    }
    default:
      return state;
  }
};
