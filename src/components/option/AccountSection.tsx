import React from 'react';
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonGrid,
  IonImg,
  IonLabel,
  IonRow,
} from '@ionic/react';
import { useAuthContext } from '../../hooks/AuthContext';
import './AccountSection.css';

const AccountSection: React.FC = () => {
  const auth = useAuthContext();

  return (
    <IonGrid className="background">
      {auth.authState.isLoggedIn && <Avatar />}
      <IonRow className="buttons">
        {!auth.authState.isLoggedIn && <NoUserButtons />}
        {auth.authState.isLoggedIn && <UserButtons />}
      </IonRow>
    </IonGrid>
  );
};

const Avatar: React.FC = () => {
  const auth = useAuthContext();
  return (
    <IonRow>
      <IonCol>
        <IonAvatar>
          <IonImg
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_383214.png"
            alt=""
          />
        </IonAvatar>
      </IonCol>
      <IonCol size="9">
        <IonLabel>Hello {auth.authState.account.email}</IonLabel>
      </IonCol>
    </IonRow>
  );
};

const NoUserButtons: React.FC = () => {
  return (
    <>
      <IonCol>
        <IonButton routerLink="/register" expand="block">
          Signup
        </IonButton>
      </IonCol>
      <IonCol>
        <IonButton routerLink="/login" expand="block">
          Login
        </IonButton>
      </IonCol>
    </>
  );
};

const UserButtons: React.FC = () => {
  const auth = useAuthContext();
  return (
    <IonCol>
      <IonButton onClick={auth.handleLogout} expand="block">
        Logout
      </IonButton>
    </IonCol>
  );
};

export default AccountSection;
