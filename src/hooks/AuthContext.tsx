import React, { useContext, useReducer, useEffect } from 'react';
import { auth } from '../config/firebase';

// Auth Context Creation
interface AuthContextProps {
  authState: any;
  authDispatch: React.Dispatch<any>;
  handleSignup: () => Promise<void>;
  handleLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
}

const AuthContext = React.createContext({} as AuthContextProps);

const authReducer = (state: any, action: any) => {
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
      break;
  }
};

const initialState = {
  account: '',
  email: '',
  password: '',
  loginError: '',
  signupError: '',
  isWaiting: false,
  isLoggedIn: false,
};

// Auth Provider Function Component
const AuthProvider: React.FC = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  const handleLogin = async () => {
    authDispatch({ type: 'login' });
    await auth
      .signInWithEmailAndPassword(authState.email, authState.password)
      .then(() => {
        authDispatch({ type: 'success' });
        return Promise.resolve();
      })
      .catch((e) => {
        authDispatch({
          type: 'error',
          error: 'loginError',
          errorValue: e.message,
        });
        return Promise.reject();
      });
  };

  const handleSignup = async () => {
    authDispatch({ type: 'signup' });
    await auth
      .createUserWithEmailAndPassword(authState.email, authState.password)
      .then(() => {
        authDispatch({ type: 'success' });
        return Promise.resolve();
      })
      .catch((e) => {
        authDispatch({
          type: 'error',
          error: 'signupError',
          errorValue: e.message,
        });
        return Promise.reject();
      });
  };

  const handleLogout = async () => {
    authDispatch({ type: 'logout' });
    await auth.signOut();
  };

  const authListener = () => {
    auth.onAuthStateChanged((u) => {
      if (u) {
        authDispatch({ type: 'account', user: u });
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const value = {
    authState,
    authDispatch,
    handleSignup,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Auth Context Custom Hook Usage
export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthProvider;
