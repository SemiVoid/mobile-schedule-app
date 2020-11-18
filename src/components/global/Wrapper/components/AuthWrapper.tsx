import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../../../config/firebase';
import { modalClose, modalOpen, userAccount } from '../../../../redux';

const AuthWrapper: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  const accountChange = () => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(modalClose({ modalName: 'userAuth' }));
        dispatch(userAccount({ account: user }));
        console.log(`Account changed to ${user.email}`);
      } else {
        dispatch(modalOpen({ modalName: 'userAuth' }));
      }
    });

    return unsub;
  };

  useEffect(accountChange, []);

  return <>{children}</>;
};

export default AuthWrapper;
