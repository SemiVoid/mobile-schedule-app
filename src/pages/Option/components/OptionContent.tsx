import React from 'react';
import { useSelector } from 'react-redux';
import PageContainer from '../../../components/shared/PageContainer';
import { RootState } from '../../../redux';
import AccountCard from './auth/AccountCard';

const OptionContent: React.FC = () => {
  const account = useSelector((state: RootState) => state.auth.account);

  return (
    <PageContainer headerTitle="Settings" fullscreen>
      {account && <AccountCard />}
    </PageContainer>
  );
};

export default OptionContent;
