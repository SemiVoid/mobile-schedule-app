import { IonList } from '@ionic/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyPage from '../../../components/shared/PageEmpty';
import { emplFetch, RootState } from '../../../redux';
import { EmployeeItem } from './EmployeeItem';

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
