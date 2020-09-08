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
          <IonButton
            slot="primary"
            size="small"
            onClick={(e) => setLoginModal(false)}
          >
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
              value={auth.authState.email}
              onIonChange={(e) =>
                auth.authDispatch({
                  type: 'input',
                  field: 'email',
                  fieldValue: e.detail.value as string,
                })
              }
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel>
            <IonInput
              type="password"
              required
              value={auth.authState.password}
              onIonChange={(e) =>
                auth.authDispatch({
                  type: 'input',
                  field: 'password',
                  fieldValue: e.detail.value as string,
                })
              }
            ></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonButton onClick={auth.handleLogin} slot="end">
              Log In
            </IonButton>
          </IonItem>
        </IonList>
        {auth.authState.loginError && (
          <div className="error">{auth.authState.loginError}</div>
        )}
      </IonContent>
    </IonModal>
  );
};

export default Login;
