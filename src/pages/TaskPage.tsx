import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

// Import Components
import PageHeader from '../components/shared/PageHeader';

const TaskPage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Tasks" />
      <IonContent fullscreen>
        <PageHeader title="Tasks" condense/>
      </IonContent>
    </IonPage>
  );
};

export default TaskPage;
