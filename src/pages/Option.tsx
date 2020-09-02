import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import AuthProvider from '../hooks/AuthContext';
import Account from '../components/option/Account';

const Option: React.FC = () => {
  return (
    <AuthProvider>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Account />
      </IonContent>
    </IonPage>
    </AuthProvider>
  );
};

export default Option;
