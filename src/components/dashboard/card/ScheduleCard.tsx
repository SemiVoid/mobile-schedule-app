import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonButton,
} from '@ionic/react';
import './Card.css';

const ScheduleCard: React.FC = () => {
  return (
    <IonCard>
      <img
        className="card-image"
        src="../../assets/dashboard/Schedule-Test-Image.jpg"
        alt=""
      />
      <IonCardHeader>
        <IonCardSubtitle>{new Date().toLocaleDateString()}</IonCardSubtitle>
        <IonCardTitle>Scheduling</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        The dashboard display of the schedule. Giving company related Schedule
        data letting people know when they work.
      </IonCardContent>
      <IonItem>
        <IonButton slot="end" routerLink="/schedule">
          Go to Schedule
        </IonButton>
      </IonItem>
    </IonCard>
  );
};

export default ScheduleCard;
