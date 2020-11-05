import { IonAvatar, IonImg, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux';

const AccountCard = () => {
  const account = useSelector((state: RootState) => state.auth.account);

  return (
    <IonItem>
      <IonAvatar slot="start">
        <IonImg
          src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
      </IonAvatar>
      <IonLabel>Hello {account?.email}</IonLabel>
    </IonItem>
  );
};

export default AccountCard;
