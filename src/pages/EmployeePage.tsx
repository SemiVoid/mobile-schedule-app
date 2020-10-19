import React from 'react';
import { IonList } from '@ionic/react';

// Import Components
import PageContainer from '../components/shared/Page/PageContainer';
import EmptyPage from '../components/shared/EmptyPage';
import EmployeeFooter from '../components/pages/employee/EmployeeFooter';
import EmployeeItem from '../components/pages/employee/EmployeeItem';
import { useEmployeeContext } from '../hooks/employee/EmployeeContext';

interface empData {
  name: string;
  department: string;
}

const EmployeePage: React.FC = () => {
  const employee = useEmployeeContext();

  const list = employee.value
    ?.get('workers')
    .map((data: empData) => (
      <EmployeeItem
        key={data.name}
        name={data.name}
        department={data.department}
      />
    ));

  return (
    <PageContainer pageTitle="Employees" footer={<EmployeeFooter />} fullscreen>
      {employee.value ? (
        <IonList className="ion-margin-vertical">{list}</IonList>
      ) : (
        <EmptyPage page="Employee" />
      )}
    </PageContainer>
  );
};

export default EmployeePage;
