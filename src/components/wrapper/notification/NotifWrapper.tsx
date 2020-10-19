import React from 'react';
import { IonAlert, IonLoading, IonToast } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, NotifType, notifDismiss } from '../../../redux';

// Notification Wrapper
const NotifWrapper: React.FC = ({ children }) => {
  const {
    notifLoading,
    notifToast,
    notifAlert,
    cssClass,
    header,
    message,
  } = useSelector((state: RootState) => state.notif);
  const dispatch = useDispatch();

  const handleDismiss = (notifType: NotifType) => {
    dispatch(notifDismiss({ notifType: notifType }));
  };

  return (
    <>
      {children}
      <IonLoading
        isOpen={notifLoading}
        cssClass={cssClass}
      />
      <IonToast
        isOpen={notifToast}
        onDidDismiss={() => handleDismiss('notifToast')}
        header={header}
        message={message}
        duration={4000}
        position="top"
      />
      <IonAlert
        isOpen={notifAlert}
        onDidDismiss={() => handleDismiss('notifAlert')}
        cssClass={cssClass}
        header={header}
        message={message}
        buttons={['OK']}
      />
    </>
  );
};

export default NotifWrapper;
