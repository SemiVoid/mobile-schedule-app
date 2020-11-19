import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useIonInput from '../../../../../hooks/useIonInput';
import { RootState, updateName } from '../../../../../redux';

const UpdateName: React.FC = () => {
  const [, bindName, sendName] = useIonInput('displayName');
  const { account } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    sendName();
    dispatch(updateName());
  };

  return (
    <form
      onSubmit={(e) => {
        handleUpdate(e);
      }}
    >
      <IonList className="ion-margin-vertical">
        <IonItem>
          <IonLabel>Name</IonLabel>
          <IonInput
            {...bindName}
            placeholder={account?.displayName as string}
            required
          />
        </IonItem>
      </IonList>
      <IonButton type="submit" expand="block">
        Update Name
      </IonButton>
    </form>
  );
};

export default UpdateName;
