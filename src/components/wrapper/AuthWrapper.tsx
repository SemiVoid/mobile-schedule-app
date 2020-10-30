import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { userAccount } from '../../redux';
import { auth } from '../../config/firebase';

// Modal Wrapper
const AuthWrapper: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  const accountChange = () => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(userAccount({ account: user }));
        console.log(`Account changed to ${user.email}`);
      }
    });

    return unsub;
  };

  useEffect(accountChange, []);

  return <>{children}</>;
};

export default AuthWrapper;
