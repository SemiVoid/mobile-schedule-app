import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

// Import Components
import PageHeader from '../components/shared/PageHeader';
import EmptyPage from '../components/shared/EmptyPage';
import EmployeeFooter from '../components/employee/EmployeeFooter';

const EmployeePage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Employees" />
      <IonContent fullscreen>
        <PageHeader title="Employees" condense />
        <EmptyPage page="Employee" />
      </IonContent>
      <EmployeeFooter />
    </IonPage>
  );
};

export default EmployeePage;
