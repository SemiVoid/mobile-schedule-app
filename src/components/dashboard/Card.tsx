import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/react';
import './Card.css';

interface CardProps {
  title: string;
  desc: string;
  imgURL?: string;
  cardLink?: string;
}

const Card: React.FC<CardProps> = ({ title, desc, imgURL, cardLink }) => {
  return (
    <IonCard routerLink={cardLink}>
      <img className="card-image" src={imgURL} alt={title}/>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{desc}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
