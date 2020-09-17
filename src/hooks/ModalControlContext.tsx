import React, { useContext, useReducer } from 'react';
import AddEmployee from '../pages/employee/AddEmployee';

// Auth Context Creation
interface ModalControlContextProps {
  modalState: any;
  modalDispatch: React.Dispatch<any>;
}

const ModalControlContext = React.createContext({} as ModalControlContextProps);

// Modal Control Context Custom Hook Usage
export function useModalControlContext() {
  return useContext(ModalControlContext);
}

const modalReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'openAddEmployee': {
      return {
        ...state,
        addEmployee: true,
      };
    }
    case 'closeAddEmployee': {
      return {
        ...state,
        addEmployee: false,
      };
    }
    default:
      break;
  }
};

const initialState = {
  addEmployee: false,
};

// Modal Control Provider Function Component
const ModalControlProvider: React.FC = ({ children }) => {
  const [modalState, modalDispatch] = useReducer(modalReducer, initialState);

  const value = { modalState, modalDispatch };

  return (
    <ModalControlContext.Provider value={value}>
      {children}
      <AddEmployee addEmployeeModal={modalState.addEmployee} />
    </ModalControlContext.Provider>
  );
};

export default ModalControlProvider;
