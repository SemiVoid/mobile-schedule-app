import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonButton,
} from '@ionic/react';
import './Card.css';

const TaskCard: React.FC = () => {
  return (
    <IonCard>
      <img
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
      </IonCardContent>
      <IonItem>
        <IonButton slot="end" routerLink="/task">
          Go to Task
        </IonButton>
      </IonItem>
    </IonCard>
  );
};

export default TaskCard;
