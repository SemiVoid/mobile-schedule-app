import React, { useContext, useReducer } from 'react';

// Import Firebase Auth
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

// Import Auth Reducer
import {
  AuthActionType,
  AuthInitState,
  AuthReducer,
  AuthStateType,
} from './AuthReducer';

import { useModalContext } from './ModalContext';
import { useNotificationContext } from './NotificationContext';

interface AuthContextProps {
  user: firebase.User | undefined;
  loading: boolean;
  authState: AuthStateType;
  authDispatch: React.Dispatch<AuthActionType>;
  handleSignup: () => void;
  handleLogin: () => void;
  handleLogout: () => void;
}

// Auth Context
const AuthContext = React.createContext({} as AuthContextProps);

// Auth Provider
const AuthProvider: React.FC = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [authState, authDispatch] = useReducer(AuthReducer, AuthInitState);
  const modalControl = useModalContext();
  const notif = useNotificationContext();

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(authState.email, authState.password)
      .then(() => {
        modalControl.modalDispatch({ type: 'closeLoginUser' });
        authDispatch({ type: 'resetEmail' });
        authDispatch({ type: 'resetPass' });
      })
      .catch((e) => {
        notif.setNotif(e.message);
        authDispatch({ type: 'resetPass' });
      });
  };

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(authState.email, authState.password)
      .then(() => {
        modalControl.modalDispatch({ type: 'closeRegisterUser' });
        authDispatch({ type: 'resetEmail' });
        authDispatch({ type: 'resetPass' });
      })
      .catch((e) => {
        notif.setNotif(e.message);
        authDispatch({ type: 'resetPass' });
      });
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const value = {
    user,
    loading,
    authState,
    authDispatch,
    handleSignup,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Auth Context Use Custom Hook
export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthProvider;
