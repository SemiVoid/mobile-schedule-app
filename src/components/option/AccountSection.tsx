import React, { useEffect } from 'react';
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonGrid,
  IonImg,
  IonLabel,
  IonRow,
} from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, userLogout, userAccount, toggleLogin, toggleRegister } from '../../redux';

import './AccountSection.css';
import { auth } from '../../config/firebase';

const AccountSection: React.FC = () => {
  const account = useSelector((state: RootState) => state.auth.account);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user =>{
      if (user){
        dispatch(userAccount({account: user}));
      }
    })

    return unsub;
  }, [dispatch])

  return (
    <IonGrid className="background">
      {account && <Avatar />}
      <IonRow className="buttons">
        {!account && <NoUserButtons />}
        {account && <UserButtons />}
      </IonRow>
    </IonGrid>
  );
};

const Avatar: React.FC = () => {
  const account = useSelector((state: RootState) => state.auth.account);

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
        <IonLabel>Hello {account?.email}</IonLabel>
      </IonCol>
    </IonRow>
  );
};

const NoUserButtons: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(toggleLogin());
  };

  const handleRegister = () => {
    dispatch(toggleRegister());
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
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
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
