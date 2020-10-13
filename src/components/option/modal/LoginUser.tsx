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
import { RootState, userLogin, userInput, toggleLogin } from '../../../redux';

interface LoginUserProps {
  loginUserModal: boolean;
}

const LoginUser: React.FC<LoginUserProps> = ({ loginUserModal }) => {
  const { email, password } = useSelector((state: RootState) => state.auth);
  const { modalLogin } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    if (modalLogin) {
      dispatch(toggleLogin());
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogin());
  };

  return (
    <IonModal isOpen={loginUserModal} onDidDismiss={closeModal}>
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
