import React, { useEffect } from 'react';

// Import Components
import PageContainer from '../components/shared/Page/PageContainer';
import AccountSection from '../components/pages/option/AccountSection';

import { useDispatch } from 'react-redux';
import { userAccount } from '../redux';
import { auth } from '../config/firebase';

const OptionPage: React.FC = () => {
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

  return (
    <PageContainer pageTitle="Settings" fullscreen>
      <AccountSection />
    </PageContainer>
  );
};

export default OptionPage;
