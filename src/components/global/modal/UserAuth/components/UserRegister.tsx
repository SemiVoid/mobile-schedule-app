import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import useIonInput from '../../../../../hooks/useIonInput';
import { userRegister } from '../../../../../redux';

const UserRegister: React.FC = () => {
  const [, bindName, sendName] = useIonInput('displayName');
  const [, bindEmail, sendEmail] = useIonInput('email');
  const [, bindPassword, sendPassword] = useIonInput('password');
  const [, bindVerifyPassword, sendVerifyPassword] = useIonInput(
    'verifyPassword'
  );
  const dispatch = useDispatch();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendName();
    sendEmail();
    sendPassword();
    sendVerifyPassword();
    dispatch(userRegister());
  };

  return (
    <form onSubmit={(e) => handleSignup(e)}>
      <IonList className="ion-margin-vertical">
        <IonItem>
          <IonLabel>Display Name</IonLabel>
          <IonInput {...bindName} type="text" required />
        </IonItem>
        <IonItem>
          <IonLabel>Email</IonLabel>
          <IonInput {...bindEmail} type="email" required />
        </IonItem>
        <IonItem>
          <IonLabel>Password</IonLabel>
          <IonInput {...bindPassword} type="password" required />
        </IonItem>
        <IonItem>
          <IonLabel>Verify Password</IonLabel>
          <IonInput {...bindVerifyPassword} type="password" required />
        </IonItem>
      </IonList>
      <IonButton expand="block" type="submit">
        Register
      </IonButton>
    </form>
  );
};

export default UserRegister;
