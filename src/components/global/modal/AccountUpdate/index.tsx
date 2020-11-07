import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux';
import ModalContainer from '../../../shared/ModalContainer';

const AccountUpdate: React.FC = () => {
  const { accountUpdate } = useSelector((state: RootState) => state.modal);

  return (
    <ModalContainer
      headerTitle="Update Account"
      isModalOpen={accountUpdate}
      modal="accountUpdate"
    >
      <p>Update Account</p>
    </ModalContainer>
  );
};

export default AccountUpdate;
