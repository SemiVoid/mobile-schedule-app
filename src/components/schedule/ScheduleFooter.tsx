import React from 'react';
import {
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import './ScheduleFooter.css';
import { useWeekContext } from '../../hooks/WeekContext';
import ViewDay from './ViewDay';

const ScheduleFooter: React.FC = () => {
  const week = useWeekContext();

  const prev = () => {
    week.setWeekIndex(week.weekIndex - 1);
  }

  const curr = () => {
    week.setWeekIndex(0);
  }

  const next = () => {
    week.setWeekIndex(week.weekIndex + 1);
  }

  return (
    <IonFooter className="ion-no-border">
      <ViewDay />
      <IonGrid className="schedule-buttons">
        <IonRow>
          <IonCol>
            <IonButton onClick={prev} expand="block">
              <IonIcon slot="start" icon={arrowBackOutline} />
              <IonLabel>Prev</IonLabel>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={curr} expand="block">
              <IonLabel>Current</IonLabel>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={next} expand="block">
              <IonIcon slot="end" icon={arrowForwardOutline} />
              <IonLabel>Next</IonLabel>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  );
};

export default ScheduleFooter;
