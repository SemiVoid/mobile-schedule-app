import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import AccountSection from '../components/option/AccountSection';
import PageHeader from '../components/shared/PageHeader';

const OptionPage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader title="Settings" />
      <IonContent fullscreen>
        <PageHeader title="Settings" condense />
        <AccountSection />
      </IonContent>
    </IonPage>
  );
};

export default OptionPage;
