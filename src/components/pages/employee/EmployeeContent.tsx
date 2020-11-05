import React, { useEffect } from 'react';
import { IonList } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { emplFetch, RootState } from '../../../redux';

// Import Components
import { EmployeeItem } from './EmployeeItem';
import { EmptyPage } from '../../shared';


export const EmployeeContent: React.FC = () => {
  const dispatch = useDispatch();
  const { employeeList } = useSelector((state: RootState) => state.empl);
  const { account } = useSelector((state: RootState) => state.auth);

  const fetchEmployee = () => {
    if (account) {
    dispatch(emplFetch());
    console.log('Employee Dispatch');
    }
  };

  useEffect(fetchEmployee, []);

  return (
    <>
      {employeeList.length > 0 ? (
        <IonList className="ion-margin-vertical">
          {employeeList.map((data) => (
            <EmployeeItem
              key={data.name}
              name={data.name}
              department={data.department}
            />
          ))}
        </IonList>
      ) : (
        <EmptyPage page="Employee" />
      )}
    </>
  );
};
