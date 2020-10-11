import React, { useContext } from 'react';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { db } from '../../config/firebase';

// Employee Context Props
interface EmployeeContextProps {
  value:
    | firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
    | undefined;
  loading: boolean;
  error: Error | undefined;
  handleAddEmployee: (n: string, d: string) => void;
}

// Employee Context
const EmployeeContext = React.createContext({} as EmployeeContextProps);

// Employee Provider
const EmployeeProvider: React.FC = ({ children }) => {
  const [value, loading, error] = useDocumentOnce(
    db.collection('employees').doc('test')
  );

  const handleAddEmployee = (n: string, d: string) => {
    db.collection('employees')
      .doc('test')
      .update({
        workers: [...value?.get('workers'), { name: n, department: d }],
      });
  };

  const valueExport = { value, loading, error, handleAddEmployee };

  return (
    <EmployeeContext.Provider value={valueExport}>
      {children}
    </EmployeeContext.Provider>
  );
};

// Employee Context Use Custom Hook
export function useEmployeeContext() {
  return useContext(EmployeeContext);
}

export default EmployeeProvider;
