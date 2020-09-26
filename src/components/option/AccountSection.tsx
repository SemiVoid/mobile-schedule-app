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
import { useAuthContext } from '../../hooks/auth/AuthContext';
import './AccountSection.css';
import { useModalContext } from '../../hooks/modal/ModalContext';

const AccountSection: React.FC = () => {
  const auth = useAuthContext();

  return (
    <IonGrid className="background">
      {auth.user && <Avatar />}
      <IonRow className="buttons">
        {!auth.user && <NoUserButtons />}
        {auth.user && <UserButtons />}
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
        <IonLabel>Hello {auth.user?.email}</IonLabel>
      </IonCol>
    </IonRow>
  );
};

const NoUserButtons: React.FC = () => {
  const modal = useModalContext();

  const handleLogin = () => {
    modal.modalDispatch({ type: 'openLoginUser' });
  };

  const handleRegister = () => {
    modal.modalDispatch({ type: 'openRegisterUser' });
  };

  return (
    <>
      <IonCol>
        <IonButton onClick={handleRegister} expand="block">
          Signup
        </IonButton>
      </IonCol>
      <IonCol>
        <IonButton onClick={handleLogin} expand="block">
          Login
        </IonButton>
      </IonCol>
    </>
  );
};

const UserButtons: React.FC = () => {
  const auth = useAuthContext();

  const handleLogout = () => {
    auth.handleLogout();
  };

  return (
    <IonCol>
      <IonButton onClick={handleLogout} expand="block">
        Logout
      </IonButton>
    </IonCol>
  );
};

export default AccountSection;
