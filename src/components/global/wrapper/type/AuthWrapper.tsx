import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userAccount, modalOpen, modalClose } from '../../../../redux';
import { auth } from '../../../../config/firebase';

// Modal Wrapper
const AuthWrapper: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  const accountChange = () => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(modalClose({ modalName: 'login' }));
        dispatch(userAccount({ account: user }));
        console.log(`Account changed to ${user.email}`);
      } else {
        dispatch(modalOpen({ modalName: 'login' }));
      }
    });

    return unsub;
  };

  useEffect(accountChange, []);

  return <>{children}</>;
};

export default AuthWrapper;
