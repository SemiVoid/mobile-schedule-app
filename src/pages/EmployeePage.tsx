import React, { useEffect } from 'react';
import { IonList } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { emplFetch, RootState } from '../redux';

// Import Components
import { EmployeeFooter, EmployeeItem } from '../components/pages';
import { EmptyPage, PageContainer } from '../components/shared';

const EmployeePage: React.FC = () => {
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
    <PageContainer pageTitle="Employee" color="employee" footer={<EmployeeFooter />} fullscreen>
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
    </PageContainer>
  );
};

export default EmployeePage;
