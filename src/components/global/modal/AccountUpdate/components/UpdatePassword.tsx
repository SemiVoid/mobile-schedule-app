import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import useIonInput from '../../../../../hooks/useIonInput';
import { updatePassword } from '../../../../../redux';

const UpdatePassword: React.FC = () => {
  const [bindPassword, sendPassword] = useIonInput('password');
  const [bindVerifyPassword, sendVerfiyPassword] = useIonInput(
    'verifyPassword'
  );
  const dispatch = useDispatch();

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    sendPassword();
    sendVerfiyPassword();
    dispatch(updatePassword());
  };

  return (
    <form
      onSubmit={(e) => {
        handleUpdate(e);
      }}
    >
      <IonList className="ion-margin-vertical">
        <IonItem>
          <IonLabel>Password</IonLabel>
          <IonInput {...bindPassword} type="password" required />
        </IonItem>
        <IonItem>
          <IonLabel>Verfiy Password</IonLabel>
          <IonInput {...bindVerifyPassword} type="password" required />
        </IonItem>
      </IonList>
      <IonButton type="submit" expand="block">
        Update Password
      </IonButton>
    </form>
  );
};

export default UpdatePassword;
