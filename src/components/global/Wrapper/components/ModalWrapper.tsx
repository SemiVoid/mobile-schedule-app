import React from 'react';
import AccountUpdate from '../../modal/AccountUpdate';
import EmployeeAdd from '../../modal/EmployeeAdd';
import ScheduleAdd from '../../modal/ScheduleAdd';
import UserAuth from '../../modal/UserAuth';

const ModalWrapper: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <UserAuth />
      <ScheduleAdd />
      <EmployeeAdd />
      <AccountUpdate />
    </>
  );
};

export default ModalWrapper;
