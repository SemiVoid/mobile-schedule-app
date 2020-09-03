import React, { useState, useEffect } from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonLabel,
  IonButton,
} from '@ionic/react';
import { useAuthContext } from '../../hooks/AuthContext';
import './Account.css';
import Login from './Login';

const Account = () => {
  const auth = useAuthContext();
  const [loginModal, setLoginModal] = useState<boolean>(false);

  useEffect(() => {
    setLoginModal(false);
  }, [auth.account]);

  return (
    <>
      <IonGrid className="background">
        {auth.account && (
          <IonRow>
            <IonCol>
              <IonAvatar>
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_383214.png&f=1&nofb=1"
                  alt=""
                />
              </IonAvatar>
            </IonCol>
            <IonCol size="9">
              <IonLabel>Hello, {auth.account}</IonLabel>
            </IonCol>
          </IonRow>
        )}
        <IonRow>
          <IonCol>
            {!auth.account && (
              <IonButton onClick={(e) => setLoginModal(true)}>Login</IonButton>
            )}
            {!auth.account && <IonButton>Signup</IonButton>}
            {auth.account && (
              <IonButton onClick={auth.handleLogout}>Logout</IonButton>
            )}
          </IonCol>
        </IonRow>
      </IonGrid>
      <Login loginModal={loginModal} setLoginModal={setLoginModal} />
    </>
  );
};

export default Account;
