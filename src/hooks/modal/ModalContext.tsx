import React, { useContext, useReducer } from 'react';

// Import Modals
import AddEmployee from '../../components/employee/modal/AddEmployee';
import LoginUser from '../../components/option/modal/LoginUser';
import RegisterUser from '../../components/option/modal/RegisterUser';

// Import Providers
import AuthProvider from '../auth/AuthContext';

// Import Modal Reducer
import {
  ModalActionType,
  ModalInitState,
  ModalReducer,
  ModalStateType,
} from './ModalReducer';

interface ModalContextProps {
  modalState: ModalStateType;
  modalDispatch: React.Dispatch<ModalActionType>;
}

// Modal Context
const ModalContext = React.createContext({} as ModalContextProps);

// Modal Provider
const ModalProvider: React.FC = ({ children }) => {
  const [modalState, modalDispatch] = useReducer(ModalReducer, ModalInitState);

  const value = { modalState, modalDispatch };

  return (
    <ModalContext.Provider value={value}>
      {children}
      <AddEmployee addEmployeeModal={modalState.addEmployee} />
      <AuthProvider>
        <LoginUser loginUserModal={modalState.loginUser} />
        <RegisterUser registerUserModal={modalState.registerUser} />
      </AuthProvider>
    </ModalContext.Provider>
  );
};

// Modal Context Use Custom Hook
export function useModalContext() {
  return useContext(ModalContext);
}

export default ModalProvider;
