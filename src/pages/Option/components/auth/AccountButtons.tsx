import React from 'react';
import { IonItem, IonItemDivider, IonItemGroup, IonLabel } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { accountDelete, userLogout, modalOpen } from '../../../../redux';

export const AccountButtons: React.FC = () => {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(modalOpen({modalName: 'accountUpdate'}));
  };

  const handleLogout = () => {
    dispatch(userLogout());
  };

  const handleDelete = () => {
    dispatch(accountDelete());
  };

  return (
    <IonItemGroup className="ion-margin-vertical">
      <IonItemDivider>
        <IonLabel>Account</IonLabel>
      </IonItemDivider>
      <IonItem onClick={handleUpdate} button>
        <IonLabel color="warning">Update Name</IonLabel>
      </IonItem>
      <IonItem onClick={handleLogout} button>
        <IonLabel color="secondary">Logout</IonLabel>
      </IonItem>
      <IonItem onClick={handleDelete} button disabled>
        <IonLabel color="danger">Delete Account</IonLabel>
      </IonItem>
    </IonItemGroup>
  );
};
