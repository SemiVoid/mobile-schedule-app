import React from 'react';
import { IonAlert, IonLoading, IonToast } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, notifDismiss } from '../../../redux';

// Notification Wrapper
const NotifWrapper: React.FC = ({ children }) => {
  const {
    notifLoading,
    notifToast,
    notifAlert,
    cssClass,
    header,
    message,
    duration,
  } = useSelector((state: RootState) => state.notif);
  const dispatch = useDispatch();

  const handleDismiss = () => {
    dispatch(notifDismiss());
  };

  return (
    <>
      {children}
      <IonLoading
        isOpen={notifLoading}
        onDidDismiss={handleDismiss}
        cssClass={cssClass}
        message={message}
        duration={duration}
      />
      <IonToast
        isOpen={notifToast}
        onDidDismiss={handleDismiss}
        header={header}
        message={message}
        duration={duration}
        position="top"
      />
      <IonAlert
        isOpen={notifAlert}
        onDidDismiss={handleDismiss}
        cssClass={cssClass}
        header={header}
        message={message}
        buttons={['OK']}
      />
    </>
  );
};

export default NotifWrapper;
