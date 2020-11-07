import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, userInput, userLogin } from '../../../../../redux';

const UserLogin: React.FC = () => {
  const { email, password } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogin());
  };

  return (
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
  );
};

export default UserLogin;
