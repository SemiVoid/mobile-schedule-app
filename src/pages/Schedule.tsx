import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import ViewDay from '../components/schedule/ViewDay';
import ViewDisplay from '../components/schedule/ViewDisplay';
import useWeekday from '../hooks/useWeekday';
import useSchedule from '../hooks/useSchedule';

const Schedule: React.FC = () => {
  const { weekDayList, weekIndex, setWeekIndex } = useWeekday();
  const { filteredList, getSchedulesDate } = useSchedule();

  const searchDate = new Date('8-26-2020');

  const refresh = () => {
    getSchedulesDate(searchDate);
  }

  const increase = () => {
    setWeekIndex(weekIndex + 1);
  };

  const decrease = () => {
    setWeekIndex(weekIndex - 1);
  };

  const current = () => {
    setWeekIndex(0);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Schedule</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ViewDay listNum={weekDayList} />
        <ViewDisplay listSchedule={filteredList} />
      </IonContent>
      <IonFooter>
        <IonGrid className="schedule-buttons">
          <IonRow>
            <IonCol>
              <IonButton onClick={decrease}>
                <IonIcon slot="start" icon={arrowBackOutline} />
                <IonLabel>Prev</IonLabel>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={current}>
                <IonLabel>Current</IonLabel>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={increase}>
                <IonIcon slot="end" icon={arrowForwardOutline} />
                <IonLabel>Next</IonLabel>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={refresh}>
                <IonLabel>Refresh</IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Schedule;
