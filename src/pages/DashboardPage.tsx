import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageHeader from '../components/shared/PageHeader';
import ScheduleCard from '../components/dashboard/card/ScheduleCard';
import TaskCard from '../components/dashboard/card/TaskCard';

const DashboardPage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Dashboard" />
      <IonContent fullscreen>
        <PageHeader title="Dashboard" condense />
        <ScheduleCard />
        <TaskCard />
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
