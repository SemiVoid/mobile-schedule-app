import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';

// Import Components
import { AccountButtons, AccountSection } from '../components/pages';
import { PageContainer } from '../components/shared';

const OptionPage: React.FC = () => {
  const account = useSelector((state: RootState) => state.auth.account);

  return (
    <PageContainer pageTitle="Settings" fullscreen>
      {account && <AccountSection />}
      {account && <AccountButtons />}
    </PageContainer>
  );
};

export default OptionPage;
