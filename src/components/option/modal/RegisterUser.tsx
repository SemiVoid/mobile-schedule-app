import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonToast,
} from '@ionic/react';
import PageHeader from '../../shared/PageHeader';
import { useModalContext } from '../../../hooks/ModalContext';
import { useAuthContext } from '../../../hooks/AuthContext';

interface RegisterUserProps {
  registerUserModal: boolean;
}

const RegisterUser: React.FC<RegisterUserProps> = ({ registerUserModal }) => {
  const [errorToast, setErrorToast] = useState(false);
  const modalControl = useModalContext();
  const auth = useAuthContext();

  const closeModal = () => {
    modalControl.modalDispatch({ type: 'closeRegisterUser' });
  };

  const handleSignup = () => {
    auth
      .handleSignup()
      .then(() => {
        closeModal();
      })
      .catch(() => {
        setErrorToast(true);
      });
  };

  return (
    <IonModal isOpen={registerUserModal}>
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
            <IonButton onClick={closeModal} slot="end">
              Close Modal
            </IonButton>
            <IonButton onClick={handleSignup} slot="end">
              Signup
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonModal>
  );
};

export default RegisterUser;
