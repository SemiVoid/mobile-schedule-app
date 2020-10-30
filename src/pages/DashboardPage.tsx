import React from 'react';
import { IonCol, IonRow } from '@ionic/react';

// Import Components
import PageContainer from '../components/shared/Page/PageContainer';
import Card from '../components/pages/dashboard/card/Card';

// Import Data
import { cardList } from '../components/pages/dashboard/data/cards';

const DashboardPage: React.FC = () => {
  const cards = cardList.map((data) => (<IonCol key ={data.cardTitle} sizeXs="12" sizeXl="6"><Card cardTitle={data.cardTitle} cardDesc={data.cardDesc} /></IonCol>));

  return (
    <PageContainer pageTitle="Dashboard">
      <IonRow>
        {cards}
      </IonRow>
    </PageContainer>
  );
};

export default DashboardPage;
