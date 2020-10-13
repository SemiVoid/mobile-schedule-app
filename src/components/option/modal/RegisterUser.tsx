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
import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  userRegister,
  userInput,
  toggleRegister,
} from '../../../redux';

interface RegisterUserProps {
  registerUserModal: boolean;
}

const RegisterUser: React.FC<RegisterUserProps> = ({ registerUserModal }) => {
  const { email, password, verifyPassword } = useSelector(
    (state: RootState) => state.auth
  );
  const { modalRegister } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    if (modalRegister) {
      dispatch(toggleRegister());
    }
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userRegister());
  };

  return (
    <IonModal isOpen={registerUserModal} onDidDismiss={closeModal}>
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
                value={email}
                onIonChange={(e) =>
                  dispatch(
                    userInput({
                      field: 'email',
                      value: e.detail.value as string,
                    })
                  )
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Password</IonLabel>
              <IonInput
                type="password"
                required
                value={password}
                onIonChange={(e) =>
                  dispatch(
                    userInput({
                      field: 'password',
                      value: e.detail.value as string,
                    })
                  )
                }
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Verify Password</IonLabel>
              <IonInput
                type="password"
                required
                value={verifyPassword}
                onIonChange={(e) =>
                  dispatch(
                    userInput({
                      field: 'verifyPassword',
                      value: e.detail.value as string,
                    })
                  )
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
