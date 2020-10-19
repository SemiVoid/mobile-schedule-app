import React from 'react';

// Import Modals
import LoginUser from '../modals/option/LoginUser';
import RegisterUser from '../modals/option/RegisterUser';
import AddEmployee from '../modals/employee/AddEmployee';

// Modal Wrapper
const ModalWrapper: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <LoginUser />
      <RegisterUser />
      <AddEmployee />
    </>
  );
};

export default ModalWrapper;
