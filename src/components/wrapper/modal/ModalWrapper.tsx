import React from 'react';

// Import Modals
import LoginUser from '../../option/modal/LoginUser';
import RegisterUser from '../../option/modal/RegisterUser';
import AddEmployee from '../../employee/modal/AddEmployee';

// Modal Wrapper
const ModalWrapper: React.FC = ({ children }) => {
  return (
    <div>
      {children}
      <LoginUser />
      <RegisterUser />
      <AddEmployee />
    </div>
  );
};

export default ModalWrapper;
