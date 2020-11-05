import React from 'react';
import { IonCol, IonRow } from '@ionic/react';

// Import Components
import { DashboardCard } from './card/DashboardCard';

// Import Data
import { cardList } from '../../../data/cards';

export const DashboardContent: React.FC = () => {
  const cards = cardList.map((data) => (
    <IonCol key={data.cardTitle} sizeXs="12" sizeXl="6">
      <DashboardCard cardTitle={data.cardTitle} cardDesc={data.cardDesc} />
    </IonCol>
  ));

  return <IonRow>{cards}</IonRow>;
};
