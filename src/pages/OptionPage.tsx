import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import AuthProvider from '../hooks/AuthContext';
import Account from '../components/option/Account';
import PageHeader from '../components/shared/PageHeader';

const OptionPage: React.FC = () => {
  return (
    <AuthProvider>
      <IonPage>
        <PageHeader title="Settings" />
        <IonContent fullscreen>
          <PageHeader title="Settings" condense />
          <Account />
        </IonContent>
      </IonPage>
    </AuthProvider>
  );
};

export default OptionPage;
