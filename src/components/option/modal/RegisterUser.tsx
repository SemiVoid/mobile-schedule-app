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
import { RootState, userRegister, userInput, modalClose } from '../../../redux';

const RegisterUser: React.FC = () => {
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
      <PageHeader title="Register" modal="register" />
      <IonContent fullscreen>
        <PageHeader title="Register" condense />
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
      </IonContent>
    </IonModal>
  );
};

export default RegisterUser;
