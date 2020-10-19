import React from 'react';
import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
} from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, userLogin, userInput, modalClose } from '../../../redux';
import PageContainer from '../../shared/Page/PageContainer';

export const LoginUser: React.FC = () => {
  const { email, password } = useSelector((state: RootState) => state.auth);
  const { login } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    if (login) {
      dispatch(modalClose({ modalName: 'login' }));
    }
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogin());
  };

  return (
    <IonModal isOpen={login} onDidDismiss={closeModal}>
      <PageContainer pageTitle="Login" modal="login" fullscreen>
        <form onSubmit={(e) => handleLogin(e)}>
          <IonList className="ion-margin-vertical">
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
          </IonList>
          <IonButton expand="block" type="submit">
            Log In
          </IonButton>
        </form>
      </PageContainer>
    </IonModal>
  );
};
