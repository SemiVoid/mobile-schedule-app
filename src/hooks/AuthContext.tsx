import React, { useContext, useReducer, useEffect } from 'react';
import { auth } from '../config/firebase';
import {
  AuthActionType,
  AuthInitState,
  AuthReducer,
  AuthStateType,
} from './AuthReducer';

// Auth Context Creation
interface AuthContextProps {
  authState: AuthStateType;
  authDispatch: React.Dispatch<AuthActionType>;
  handleSignup: () => Promise<void>;
  handleLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
}

const AuthContext = React.createContext({} as AuthContextProps);

// Auth Provider Function Component
const AuthProvider: React.FC = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, AuthInitState);

  const handleLogin = async () => {
    authDispatch({ type: 'login' });
    await auth
      .signInWithEmailAndPassword(authState.email, authState.password)
      .then(() => {
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
        authDispatch({ type: 'success' });
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
