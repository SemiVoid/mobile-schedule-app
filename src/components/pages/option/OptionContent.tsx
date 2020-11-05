import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';

// Import Components
import { AccountButtons } from './auth/AccountButtons';
import { AccountSection } from './auth/AccountSection';

export const OptionContent: React.FC = () => {
  const account = useSelector((state: RootState) => state.auth.account);

  return (
    <>
      {account && <AccountSection />}
      {account && <AccountButtons />}
    </>
  );
};
