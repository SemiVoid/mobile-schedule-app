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
import { useModalContext } from '../../../hooks/ModalContext';
import { useAuthContext } from '../../../hooks/AuthContext';

interface LoginUserProps {
  loginUserModal: boolean;
}

const LoginUser: React.FC<LoginUserProps> = ({ loginUserModal }) => {
  const modalControl = useModalContext();
  const auth = useAuthContext();

  const closeModal = () => {
    modalControl.modalDispatch({ type: 'closeLoginUser' });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.handleLogin();
  };

  return (
    <IonModal
      isOpen={loginUserModal}
      onDidDismiss={closeModal}
    >
      <PageHeader title="Login" />
      <IonContent fullscreen>
        <PageHeader title="Login" condense />
        <IonList className="ion-margin-vertical">
          <form onSubmit={(e) => handleLogin(e)}>
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
                Log In
              </IonButton>
            </IonItem>
          </form>
        </IonList>
      </IonContent>
    </IonModal>
  );
};

export default LoginUser;
