import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonIcon,
  IonItem,
} from '@ionic/react';
import { arrowForward } from 'ionicons/icons';

export interface CardProps {
  cardTitle: string;
  cardDesc: string;
}

const Card: React.FC<CardProps> = ({ cardTitle, cardDesc }) => {
  return (
    <IonCard>
      <IonItem
        color={cardTitle.toLowerCase()}
        routerLink={`/${cardTitle.toLowerCase()}`}
        detail={false}
      >
        <IonCardTitle>{cardTitle}</IonCardTitle>
        <IonIcon icon={arrowForward} slot="end"/>
      </IonItem>
      <IonCardContent>
        <p className="ion-padding-vertical">{cardDesc}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
