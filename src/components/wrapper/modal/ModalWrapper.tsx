import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';

// Import Modals
import LoginUser from '../../option/modal/LoginUser';
import RegisterUser from '../../option/modal/RegisterUser';
import AddEmployee from '../../employee/modal/AddEmployee';

// Modal Wrapper
const ModalWrapper: React.FC = ({ children }) => {
  const { modalLogin, modalRegister, modalAddEmployee } = useSelector((state: RootState) => state.modal);

  return (
    <>
      {children}
      <LoginUser loginUserModal={modalLogin} />
      <RegisterUser registerUserModal={modalRegister} />
      <AddEmployee addEmployeeModal={modalAddEmployee} />
    </>
  );
};

export default ModalWrapper;
