import React, { useContext, useReducer } from 'react';
import AddEmployee from '../components/employee/modal/AddEmployee';
import LoginUser from '../components/option/modal/LoginUser';
import RegisterUser from '../components/option/modal/RegisterUser';
import {
  ModalActionType,
  ModalInitState,
  ModalReducer,
  ModalStateType,
} from './ModalReducer';

// Auth Context Creation
interface ModalContextProps {
  modalState: ModalStateType;
  modalDispatch: React.Dispatch<ModalActionType>;
}

const ModalContext = React.createContext({} as ModalContextProps);

// Modal Control Context Custom Hook Usage
export function useModalContext() {
  return useContext(ModalContext);
}

// Modal Control Provider Function Component
const ModalProvider: React.FC = ({ children }) => {
  const [modalState, modalDispatch] = useReducer(ModalReducer, ModalInitState);

  const value = { modalState, modalDispatch };

  return (
    <ModalContext.Provider value={value}>
      {children}
      <AddEmployee addEmployeeModal={modalState.addEmployee} />
      <LoginUser loginUserModal={modalState.loginUser} />
      <RegisterUser registerUserModal={modalState.registerUser} />
    </ModalContext.Provider>
  );
};

export default ModalProvider;
