import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

// Import Providers
import AuthProvider from '../hooks/AuthContext';

// Import Components
import PageHeader from '../components/shared/PageHeader';
import AccountSection from '../components/option/AccountSection';

const OptionPage: React.FC = () => {
  return (
    <AuthProvider>
      <IonPage>
        <PageHeader title="Settings" />
        <IonContent fullscreen>
          <PageHeader title="Settings" condense />
          <AccountSection />
        </IonContent>
      </IonPage>
    </AuthProvider>
  );
};

export default OptionPage;
