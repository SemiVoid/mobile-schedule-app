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
import PageHeader from '../../components/shared/PageHeader';
import { useAuthContext } from '../../hooks/AuthContext';
import { useHistory } from 'react-router';

const RegisterPage: React.FC = () => {
  const [errorToast, setErrorToast] = useState(false);
  const auth = useAuthContext();
  const history = useHistory();

  const handleSignup = () => {
    auth
      .handleSignup()
      .then(() => {
        history.push('/option');
      })
      .catch(() => {
        setErrorToast(true);
      });
  };

  return (
    <IonPage>
      <PageHeader title="Register" />
      <IonContent fullscreen>
        <PageHeader title="Register" condense />
        <IonToast
          isOpen={errorToast}
          onDidDismiss={() => setErrorToast(false)}
          message={auth.authState.signupError}
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
            <IonButton onClick={handleSignup} slot="end">
              Signup
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
