import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

// Import Providers
import ScheduleProvider from '../hooks/ScheduleContext';
import WeekProvider from '../hooks/WeekContext';

// Import Components
import PageHeader from '../components/shared/PageHeader';
import ViewDisplay from '../components/pages/schedule/ViewDisplay';
import ScheduleFooter from '../components/pages/schedule/ScheduleFooter';

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
