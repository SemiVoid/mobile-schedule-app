import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

// Components
import ViewDay from '../components/schedule/ViewDay';
import ViewDisplay from '../components/schedule/ViewDisplay';
import ScheduleFooter from '../components/schedule/ScheduleFooter';

// Providers
import ScheduleProvider from '../hooks/ScheduleContext';
import WeekProvider from '../hooks/WeekContext';

const Schedule: React.FC = () => {
  return (
    <ScheduleProvider>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Schedule</IonTitle>
          </IonToolbar>
        </IonHeader>

        <WeekProvider>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Schedule</IonTitle>
              </IonToolbar>
            </IonHeader>
            <ViewDay />
            <ViewDisplay />
          </IonContent>
          <ScheduleFooter />
        </WeekProvider>
      </IonPage>
    </ScheduleProvider>
  );
};

export default Schedule;
