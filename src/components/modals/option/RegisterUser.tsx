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
import { RootState, userRegister, userInput, modalClose } from '../../../redux';
import PageContainer from '../../shared/Page/PageContainer';

export const RegisterUser: React.FC = () => {
  const { email, password, verifyPassword } = useSelector(
    (state: RootState) => state.auth
  );
  const { register } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    if (register) {
      dispatch(modalClose({ modalName: 'register' }));
    }
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userRegister());
  };

  return (
    <IonModal isOpen={register} onDidDismiss={closeModal}>
      <PageContainer pageTitle="Register" modal="register" fullscreen>
        <form onSubmit={(e) => handleSignup(e)}>
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
          </IonList>
          <IonButton expand="block" type="submit">
            Signup
          </IonButton>
        </form>
      </PageContainer>
    </IonModal>
  );
};
