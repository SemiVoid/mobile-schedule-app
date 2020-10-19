import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonImg,
} from '@ionic/react';
import './Card.css';

const ScheduleCard: React.FC = () => {
  return (
    <IonCard>
      <IonImg
        className="card-image"
        src="../../assets/dashboard/Schedule-Test-Image.jpg"
        alt=""
      />
      <IonCardHeader>
        <IonCardSubtitle color="secondary">{new Date().toLocaleDateString()}</IonCardSubtitle>
        <IonCardTitle>Scheduling</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        The dashboard display of the schedule. Giving company related Schedule
        data letting people know when they work.
        <IonButton fill="outline" expand="block" size="small" routerLink="/schedule">
          Go to Schedule
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default ScheduleCard;
