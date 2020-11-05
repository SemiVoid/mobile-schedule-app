import React from 'react';
import { IonCol, IonRow } from '@ionic/react';

// Import Components
import { DashboardCard } from '../components/pages';
import { PageContainer } from '../components/shared';

// Import Data
import { cardList } from '../data/cards';

const DashboardPage: React.FC = () => {
  const cards = cardList.map((data) => (<IonCol key ={data.cardTitle} sizeXs="12" sizeXl="6"><DashboardCard cardTitle={data.cardTitle} cardDesc={data.cardDesc} /></IonCol>));

  return (
    <PageContainer pageTitle="Dashboard">
      <IonRow>
        {cards}
      </IonRow>
    </PageContainer>
  );
};

export default DashboardPage;
