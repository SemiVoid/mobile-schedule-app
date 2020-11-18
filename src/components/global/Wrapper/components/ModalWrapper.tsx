import React from 'react';
import AccountUpdate from '../../modal/AccountUpdate';
import EmployeeAdd from '../../modal/EmployeeAdd';
import UserAuth from '../../modal/UserAuth';

const ModalWrapper: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <UserAuth />
      <EmployeeAdd />
      <AccountUpdate />
    </>
  );
};

export default ModalWrapper;
