import React, { useEffect } from 'react';
import { IonList } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { emplFetch, RootState } from '../redux';

// Import Components
import PageContainer from '../components/shared/Page/PageContainer';
import EmptyPage from '../components/shared/EmptyPage';
import EmployeeFooter from '../components/pages/employee/EmployeeFooter';
import EmployeeItem from '../components/pages/employee/EmployeeItem';

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
