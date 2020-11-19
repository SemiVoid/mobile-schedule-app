import { IonItemDivider, IonLabel, IonList } from '@ionic/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyPage from '../../../components/shared/PageEmpty';
import { emplFetch, RootState } from '../../../redux';
import EmplChange from './EmplChange';
import { EmployeeItem } from './EmployeeItem';

export const EmployeeContent: React.FC = () => {
  const dispatch = useDispatch();
  const { employeeList, origEmplList, changesMade } = useSelector(
    (state: RootState) => state.empl
  );
  const { account } = useSelector((state: RootState) => state.auth);

  const fetchEmployee = () => {
    if (account) {
      dispatch(emplFetch('employeeList'));
    }
  };

  useEffect(fetchEmployee, [origEmplList]);

  return (
    <>
      {changesMade && <EmplChange />}
      {employeeList.length > 0 ? (
        <IonList className="ion-margin-vertical">
          <IonItemDivider>
            <IonLabel>Employee List</IonLabel>
          </IonItemDivider>
          {employeeList.map((data) => (
            <EmployeeItem
              id={data.id}
              key={data.id}
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
