import React, { useContext, useReducer, useEffect } from 'react';
import { auth } from '../config/firebase';

// Auth Context Creation
interface AuthContextProps {
  authState: any;
  authDispatch: React.Dispatch<any>;
  handleSignup: () => void;
  handleLogin: () => void;
  handleLogout: () => void;
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
        loginError: '',
        isWaiting: true,
      };
    }
    case 'signup': {
      return {
        ...state,
        signupError: '',
        isWaiting: true,
      };
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
        account: action.user,
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
        username: '',
        password: '',
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

  const handleLogin = () => {
    authDispatch({ type: 'login' });
    auth
      .signInWithEmailAndPassword(authState.email, authState.password)
      .catch((e) => {
        authDispatch({
          type: 'error',
          error: 'loginError',
          errorValue: e.message,
        });
      });
  };

  const handleSignup = async () => {
    authDispatch({ type: 'signup' });
    await auth
      .createUserWithEmailAndPassword(authState.email, authState.password)
      .catch((e) => {
        authDispatch({
          type: 'error',
          error: 'signupError',
          errorValue: e.message,
        });
      });
  };

  const handleLogout = async () => {
    authDispatch({ type: 'logout' });
    await auth.signOut();
  };

  const authListener = async () => {
    await auth.onAuthStateChanged((u) => {
      if (u) {
        authDispatch({ type: 'success', user: u });
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
