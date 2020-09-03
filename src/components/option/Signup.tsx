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
import './Signup.css';

interface AccountProps {
  signupModal: boolean;
  setSignupModal: (data: boolean) => void;
}

const Signup: React.FC<AccountProps> = ({ signupModal, setSignupModal }) => {
  const auth = useAuthContext();

  return (
    <IonModal isOpen={signupModal}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signup With Email</IonTitle>
          <IonButton
            slot="primary"
            size="small"
            onClick={(e) => setSignupModal(false)}
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
            <IonButton onClick={auth.handleSignup} slot="end">
              Signup
            </IonButton>
          </IonItem>
        </IonList>
        {auth.signupError && <div className="error">{auth.signupError}</div>}
      </IonContent>
    </IonModal>
  );
};

export default Signup;
