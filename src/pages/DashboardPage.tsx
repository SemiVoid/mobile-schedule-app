import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

// Import Components
import PageHeader from '../components/shared/PageHeader';
import ScheduleCard from '../components/dashboard/card/ScheduleCard';
import TaskCard from '../components/dashboard/card/TaskCard';

const DashboardPage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Dashboard" />
      <IonContent>
        <PageHeader title="Dashboard" condense />
        <ScheduleCard />
        <TaskCard />
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
