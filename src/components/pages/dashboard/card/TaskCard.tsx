import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonImg,
} from '@ionic/react';
import './Card.css';

const TaskCard: React.FC = () => {
  return (
    <IonCard>
      <IonImg
        className="card-image"
        src="../../assets/dashboard/Tasks-Test-Image.jpg"
        alt=""
      />
      <IonCardHeader>
        <IonCardTitle>Tasks</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        The dashboard display of the Tasks. Giving company related tasks data
        letting people know what they need to work on.
        <IonButton fill="outline" expand="block" size="small" routerLink="/task">
          Go to Task
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default TaskCard;
