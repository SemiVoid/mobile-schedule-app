import React from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import { useWeekContext } from '../../../hooks/WeekContext';
import ViewDay from './ViewDay';

export const ScheduleFooter: React.FC = () => {
  const week = useWeekContext();

  const prev = () => {
    week.setWeekIndex(week.weekIndex - 1);
  };

  const curr = () => {
    week.setWeekIndex(0);
  };

  const next = () => {
    week.setWeekIndex(week.weekIndex + 1);
  };

  return (
    <IonGrid className="schedule-buttons" fixed>
      <IonRow>
        <ViewDay />
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton color="schedule" onClick={prev} expand="block">
            <IonIcon slot="start" icon={arrowBackOutline} />
            <IonLabel>Prev</IonLabel>
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton color="schedule" onClick={curr} expand="block">
            <IonLabel>Current</IonLabel>
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton color="schedule" onClick={next} expand="block">
            <IonIcon slot="end" icon={arrowForwardOutline} />
            <IonLabel>Next</IonLabel>
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
