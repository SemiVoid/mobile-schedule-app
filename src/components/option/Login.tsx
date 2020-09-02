import React from 'react';
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonList,
  IonHeader,
  IonTitle,
  IonModal,
  IonContent,
  IonToolbar,
} from '@ionic/react';
import { useAuthContext } from '../../hooks/AuthContext';
import './Login.css';

interface AccountProps {
  loginModal: boolean;
  setLoginModal: (data: boolean) => void;
}

const Login: React.FC<AccountProps> = ({ loginModal, setLoginModal }) => {
  const auth = useAuthContext();

  return (
    <IonModal isOpen={loginModal}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login With Email</IonTitle>
          <IonButton slot="end" onClick={(e) => setLoginModal(false)}>
            Close
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className="ion-margin-vertical">
          <IonItem>
            <IonLabel>Email</IonLabel>
            <IonInput
              type="email"
              required
              value={auth.email}
              onIonChange={(e) => auth.setEmail(e.detail.value as string)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel>
            <IonInput
              type="password"
              required
              value={auth.password}
              onIonChange={(e) => auth.setPassword(e.detail.value as string)}
            ></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonButton onClick={auth.handleLogin} slot="end">
              Log In
            </IonButton>
          </IonItem>
        </IonList>
        {auth.loginError && <div className="error">{auth.loginError}</div>}
      </IonContent>
    </IonModal>
  );
};

export default Login;
