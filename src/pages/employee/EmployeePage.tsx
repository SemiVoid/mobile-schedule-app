import React from 'react'
import { IonContent, IonPage } from '@ionic/react';
import PageHeader from '../../components/shared/PageHeader';

const EmployeePage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Employees" />
      <IonContent fullscreen>
        <PageHeader title="Employees" condense />
      </IonContent>
    </IonPage>
  )
}

export default EmployeePage;
