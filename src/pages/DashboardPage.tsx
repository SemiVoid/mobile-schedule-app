import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Card from '../components/dashboard/Card';
import PageHeader from '../components/shared/PageHeader';

// Card List for Dashboard Cards
const cards = [
  {
    title: 'Scheduling',
    desc:
      'The dashboard display of the schedule. Giving company related Schedule data letting people know when they work.',
    imageURL: '../../assets/dashboard/Schedule-Test-Image.jpg',
    cardLink: '/schedule',
  },
  {
    title: 'Tasks',
    desc:
      'The dashboard display of the Tasks. Giving company related tasks data letting people know what they need to work on.',
    imageURL: '../../assets/dashboard/Tasks-Test-Image.jpg',
    cardLink: '/task',
  },
];

const DashboardPage: React.FC = () => {
  const cardList = cards.map((card) => (
    <Card
      key={card.title}
      title={card.title}
      desc={card.desc}
      imgURL={card.imageURL}
      cardLink={card.cardLink}
    />
  ));

  return (
    <IonPage>
      <PageHeader title="Dashboard" />
      <IonContent fullscreen>
        <PageHeader title="Dashboard" condense />
        {cardList}
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
