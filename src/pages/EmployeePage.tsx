import React from 'react';
import { IonContent, IonList, IonPage } from '@ionic/react';

// Import Components
import PageHeader from '../components/shared/PageHeader';
import EmptyPage from '../components/shared/EmptyPage';
import EmployeeFooter from '../components/employee/EmployeeFooter';
import EmployeeItem from '../components/employee/EmployeeItem';
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
    <IonPage>
      <PageHeader title="Employees" />
      <IonContent fullscreen>
        <PageHeader title="Employees" condense />
        {employee.value ? (
          <IonList className="ion-margin-vertical">{list}</IonList>
        ) : (
          <EmptyPage page="Employee" />
        )}
      </IonContent>
      <EmployeeFooter />
    </IonPage>
  );
};

export default EmployeePage;
