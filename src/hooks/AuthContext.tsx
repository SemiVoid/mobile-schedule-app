import React, { useContext, useState, useEffect } from 'react';
import fire from '../config/firebase';

// Auth Context Creation
interface ContextProps {
  account: firebase.User | string | null;
  email: string;
  password: string;
  loginError: string;
  signupError: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSignup: () => void;
  handleLogin: () => void;
  handleLogout: () => void;
}

const AuthContext = React.createContext({} as ContextProps);

// Auth Context Custom Hook Usage
export function useAuthContext() {
  return useContext(AuthContext);
}

// Auth Provider Function Component
const AuthProvider: React.FC = ({ children }) => {
  const [account, setAccount] = useState<firebase.User | string | null>('');
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [loginError, setLoginError] = useState<string>('');
  const [signupError, setSignupError] = useState<string>('');

  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleSignup = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        setSignupError(error.message);
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const clearError = () => {
    setLoginError('');
    setSignupError('');
  };

  const clearInput = () => {
    setEmail('');
    setPassword('');
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInput();
        setAccount(user.email);
      } else {
        setAccount('');
      }
    });
  };

  useEffect(() => {
    authListener();
  });

  const value = {
    account,
    email,
    password,
    loginError,
    signupError,
    setEmail,
    setPassword,
    handleSignup,
    handleLogin,
    handleLogout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
