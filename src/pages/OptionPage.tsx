import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

// Import Components
import PageHeader from '../components/shared/PageHeader';
import AccountSection from '../components/pages/option/AccountSection';

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
