import { IonButton, IonList } from '@ionic/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateName } from '../../../../../redux';
import FormInput from '../../../../shared/FormInput';

const UpdateName: React.FC = () => {
  const { displayName, account } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateName());
  };

  return (
    <form
      onSubmit={(e) => {
        handleUpdate(e);
      }}
    >
      <IonList className="ion-margin-vertical">
        <FormInput
          required
          text="Name"
          field="displayName"
          value={displayName}
          placeholder={account?.displayName as string}
        />
      </IonList>
      <IonButton type="submit" expand="block">
        Update Name
      </IonButton>
    </form>
  );
};

export default UpdateName;
