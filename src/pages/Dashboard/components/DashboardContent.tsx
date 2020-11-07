import { IonCol, IonRow } from '@ionic/react';
import React from 'react';
import { cardList } from './cards';
import DashboardCard from './DashboardCard';

const DashboardContent: React.FC = () => {
  const cards = cardList.map((data) => (
    <IonCol key={data.cardTitle} sizeXs="12" sizeXl="6">
      <DashboardCard cardTitle={data.cardTitle} cardDesc={data.cardDesc} />
    </IonCol>
  ));

  return <IonRow>{cards}</IonRow>;
};

export default DashboardContent;
