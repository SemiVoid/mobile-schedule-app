import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useIonInput from '../../../../../hooks/useIonInput';
import { RootState, updateEmail } from '../../../../../redux';

const UpdateEmail: React.FC = () => {
  const [bindEmail, sendEmail] = useIonInput('email');
  const { account } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail();
    dispatch(updateEmail());
  };

  return (
    <form
      onSubmit={(e) => {
        handleUpdate(e);
      }}
    >
      <IonList className="ion-margin-vertical">
        <IonItem>
          <IonLabel>Email</IonLabel>
          <IonInput
            {...bindEmail}
            type="email"
            placeholder={account?.email as string}
            required
          />
        </IonItem>
      </IonList>
      <IonButton type="submit" expand="block">
        Update Email
      </IonButton>
    </form>
  );
};

export default UpdateEmail;
