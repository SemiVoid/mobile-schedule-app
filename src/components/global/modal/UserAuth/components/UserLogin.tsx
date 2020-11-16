import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import useIonInput from '../../../../../hooks/useIonInput';
import { userLogin } from '../../../../../redux';

const UserLogin: React.FC = () => {
  const [bindEmail, sendEmail] = useIonInput('email');
  const [bindPassword, sendPassword] = useIonInput('password');
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail();
    sendPassword();
    dispatch(userLogin());
  };

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <IonList className="ion-margin-vertical">
        <IonItem>
          <IonLabel>Email</IonLabel>
          <IonInput {...bindEmail} type="email" required />
        </IonItem>
        <IonItem>
          <IonLabel>Password</IonLabel>
          <IonInput {...bindPassword} type="password" required />
        </IonItem>
      </IonList>
      <IonButton expand="block" type="submit">
        Log In
      </IonButton>
    </form>
  );
};

export default UserLogin;
