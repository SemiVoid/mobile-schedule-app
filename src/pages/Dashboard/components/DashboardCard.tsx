import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonText,
} from '@ionic/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';

export interface CardProps {
  cardTitle: string;
  cardDesc: string;
}

const DashboardCard: React.FC<CardProps> = ({ cardTitle, cardDesc }) => {
  const { numberOfEmpl } = useSelector((state: RootState) => state.empl);

  return (
    <IonCard>
      <IonItem
        color={cardTitle.toLowerCase()}
        routerLink={`/${cardTitle.toLowerCase()}`}
        detail={true}
      >
        <IonCardTitle>{cardTitle}</IonCardTitle>
      </IonItem>
      <IonCardContent>
        {cardTitle === 'Employee' && (
          <IonItem>
            <IonLabel>Number of Employees</IonLabel>
            <IonText slot="end" color="employee">
              {numberOfEmpl}
            </IonText>
          </IonItem>
        )}
        <p className="ion-padding-vertical">{cardDesc}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default DashboardCard;
