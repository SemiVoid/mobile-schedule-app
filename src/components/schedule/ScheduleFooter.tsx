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
import { useWeekPrev, useWeekCurr, useWeekNext } from '../../hooks/WeekContext';

const ScheduleFooter: React.FC = () => {
  const prev = useWeekPrev();
  const curr = useWeekCurr();
  const next = useWeekNext();

  return (
    <IonFooter>
      <IonGrid className="schedule-buttons">
        <IonRow>
          <IonCol>
            <IonButton onClick={prev}>
              <IonIcon slot="start" icon={arrowBackOutline} />
              <IonLabel>Prev</IonLabel>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={curr}>
              <IonLabel>Current</IonLabel>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton onClick={next}>
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
