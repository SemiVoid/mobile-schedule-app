import React from 'react';

// Import Components
import PageContainer from '../components/shared/Page/PageContainer';
import ScheduleCard from '../components/pages/dashboard/card/ScheduleCard';
import TaskCard from '../components/pages/dashboard/card/TaskCard';
import { IonCol, IonRow } from '@ionic/react';

const DashboardPage: React.FC = () => {
  return (
    <PageContainer pageTitle="Dashboard" fullscreen>
      <IonRow>
        <IonCol sizeXs="12" sizeXl="6">
          <ScheduleCard />
        </IonCol>
        <IonCol sizeXs="12" sizeXl="6">
          <TaskCard />
        </IonCol>
      </IonRow>
    </PageContainer>
  );
};

export default DashboardPage;
