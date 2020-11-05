import React from 'react';

// Import Modals
import { AddEmployee, UserAuth } from '../../../global';

// Modal Wrapper
const ModalWrapper: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <UserAuth />
      <AddEmployee />
    </>
  );
};

export default ModalWrapper;
