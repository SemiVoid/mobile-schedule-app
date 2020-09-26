import React from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
} from '@ionic/react';
import PageHeader from '../../shared/PageHeader';
import { useModalContext } from '../../../hooks/modal/ModalContext';
import { useAuthContext } from '../../../hooks/auth/AuthContext';

interface RegisterUserProps {
  registerUserModal: boolean;
}

const RegisterUser: React.FC<RegisterUserProps> = ({ registerUserModal }) => {
  const modalControl = useModalContext();
  const auth = useAuthContext();

  const closeModal = () => {
    modalControl.modalDispatch({ type: 'closeRegisterUser' });
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.handleSignup();
  };

  return (
    <IonModal
      isOpen={registerUserModal}
      onDidDismiss={closeModal}
    >
      <PageHeader title="Register" />
      <IonContent fullscreen>
        <PageHeader title="Register" condense />
        <IonList className="ion-margin-vertical">
          <form onSubmit={(e) => handleSignup(e)}>
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
              <IonButton type="submit" slot="end">
                Signup
              </IonButton>
            </IonItem>
          </form>
        </IonList>
      </IonContent>
    </IonModal>
  );
};

export default RegisterUser;
