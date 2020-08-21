import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Card';

// Card List for Dashboard Cards
const cards = [
  {
    title: 'Schedule',
    imageURL: '../../assets/dashboard/Schedule-Test-Image.jpg',
    cardLink: '/schedule',
    desc: 'The dashboard display of the schedule. Giving company related Schedule data letting people know when they work.'
  },
  {
    title: 'Task',
    imageURL: '../../assets/dashboard/Tasks-Test-Image.jpg',
    cardLink: '/task',
    desc: 'The dashboard display of the Tasks. Giving company related tasks data letting people know what they need to work on.'
  }
];

const cardList = cards.map((card) =>
  <Card key={card.title} title={card.title} desc={card.desc} imgURL={card.imageURL}/>
);

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        {cardList}
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;