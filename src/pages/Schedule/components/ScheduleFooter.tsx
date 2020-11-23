import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonLabel,
  IonRow,
} from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  weekCalculate,
  weekNext,
  weekPrev,
  weekReset,
} from '../../../redux';
import ViewDay from './ViewDay';

export const ScheduleFooter: React.FC = () => {
  const { weekIndex } = useSelector((state: RootState) => state.sched);
  const dispatch = useDispatch();

  const handleIndexChange = () => {
    dispatch(weekCalculate());
  };

  useEffect(handleIndexChange, [weekIndex]);

  const prev = () => {
    dispatch(weekPrev());
  };

  const curr = () => {
    dispatch(weekReset());
  };

  const next = () => {
    dispatch(weekNext());
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
