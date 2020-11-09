import React from 'react';
import { useSelector } from 'react-redux';
import PageContainer from '../../../components/shared/PageContainer';
import { RootState } from '../../../redux';
import { AccountButtons } from './auth/AccountButtons';
import AccountCard from './auth/AccountCard';

const AccountManage: React.FC = () => {
  const account = useSelector((state: RootState) => state.auth.account);

  return (
    <PageContainer headerTitle="Manage Account" fullscreen backButton>
      {account && <AccountCard expand />}
      {account && <AccountButtons />}
    </PageContainer>
  );
};

export default AccountManage;
