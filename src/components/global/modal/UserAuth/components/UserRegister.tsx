import React from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, userRegister, userInput } from '../../../../../redux';

const UserRegister: React.FC = () => {
  const { email, password, verifyPassword } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userRegister());
  };

  return (
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
  );
};

export default UserRegister;
