import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonToast,
} from '@ionic/react';
import { useAuthContext } from '../../hooks/AuthContext';
import { useHistory } from 'react-router';
import PageHeader from '../../components/shared/PageHeader';

const LoginPage: React.FC = () => {
  const [errorToast, setErrorToast] = useState(false);
  const auth = useAuthContext();
  const history = useHistory();

  const handleLogin = () => {
    auth
      .handleLogin()
      .then(() => {
        history.push('/option');
      })
      .catch(() => {
        setErrorToast(true);
      });
  };

  return (
    <IonPage>
      <PageHeader title="Login" />
      <IonContent fullscreen>
        <PageHeader title="Login" condense />
        <IonToast
          isOpen={errorToast}
          onDidDismiss={() => setErrorToast(false)}
          message={auth.authState.loginError}
          duration={3000}
          position="top"
        />
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
            <IonButton onClick={handleLogin} slot="end">
              Log In
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
