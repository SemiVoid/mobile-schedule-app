import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ViewDisplay from '../components/schedule/ViewDisplay';
import ScheduleFooter from '../components/schedule/ScheduleFooter';
import ScheduleProvider from '../hooks/ScheduleContext';
import WeekProvider from '../hooks/WeekContext';
import PageHeader from '../components/shared/PageHeader';

const SchedulePage: React.FC = () => {
  return (
    <ScheduleProvider>
      <WeekProvider>
        <IonPage>
          <PageHeader title="Schedule" />
          <IonContent>
            <PageHeader title="Schedule" condense />
            <ViewDisplay />
          </IonContent>
          <ScheduleFooter />
        </IonPage>
      </WeekProvider>
    </ScheduleProvider>
  );
};

export default SchedulePage;
