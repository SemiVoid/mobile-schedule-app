import React from 'react';
import EmployeeAdd from '../../modal/EmployeeAdd';
import UserAuth from '../../modal/UserAuth';

const ModalWrapper: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <UserAuth />
      <EmployeeAdd />
    </>
  );
};

export default ModalWrapper;
