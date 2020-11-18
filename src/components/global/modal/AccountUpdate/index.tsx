import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux';
import ModalContainer from '../../../shared/ModalContainer';
import UpdateEmail from './components/UpdateEmail';
import UpdateName from './components/UpdateName';
import UpdatePassword from './components/UpdatePassword';

const AccountUpdate: React.FC = () => {
  const { accountUpdate } = useSelector((state: RootState) => state.modal);
  const [segment, setSegment] = useState('name');

  return (
    <ModalContainer
      headerTitle="Update Account"
      isModalOpen={accountUpdate}
      modal="accountUpdate"
    >
        <IonSegment
          className="ion-padding-vertical"
          value={segment}
          onIonChange={(e) => setSegment(e.detail.value as string)}
        >
          <IonSegmentButton value="name">
            <IonLabel>Name</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="email">
            <IonLabel>Email</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="password">
            <IonLabel>Password</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      {segment === 'name' && <UpdateName />}
      {segment === 'email' && <UpdateEmail />}
      {segment === 'password' && <UpdatePassword />}
    </ModalContainer>
  );
};

export default AccountUpdate;
