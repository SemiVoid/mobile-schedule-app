import React, { useState } from 'react';
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

  return (
    <>
      <IonGrid className="background">
        {auth.account && (
          <IonRow>
            <IonCol>
              <IonAvatar>
                <img
                  src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
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
