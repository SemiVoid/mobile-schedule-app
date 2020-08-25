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
import './ScheduleFooter.css'

const ScheduleFooter: React.FC = () => {
  return (
    <IonFooter>
      <IonGrid className="schedule-buttons">
        <IonRow>
          <IonCol>
            <IonButton>
              <IonIcon slot="start" icon={arrowBackOutline} />
              <IonLabel>Prev</IonLabel>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton>
              <IonLabel>Current</IonLabel>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton>
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
