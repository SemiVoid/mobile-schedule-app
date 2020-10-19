import React from 'react';

// Import Modals
import { AddEmployee, LoginUser, RegisterUser } from '../modals';

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
