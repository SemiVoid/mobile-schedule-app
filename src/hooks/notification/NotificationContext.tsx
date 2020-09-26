import React, { useContext, useEffect, useState } from 'react';
import { IonToast } from '@ionic/react';

// Notification Context Props
interface NotificationContextProps {
  setNotif: React.Dispatch<React.SetStateAction<string>>;
};

// Notification Context
const NotificationContext = React.createContext({} as NotificationContextProps);

// Notification Provider
const NotificationProvider: React.FC = ({ children }) => {
  const [notif, setNotif] = useState('');
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (notif !== '') {
      setToast(true);
    }
  }, [notif]);

  const resetToast = () => {
    setToast(false);
    setNotif('');
  };

  const value = { setNotif };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <IonToast
        isOpen={toast}
        onDidDismiss={resetToast}
        message={notif}
        duration={3000}
        position="top"
      />
    </NotificationContext.Provider>
  );
};

// Notification Context Use Custom Hook
export function useNotificationContext() {
  return useContext(NotificationContext);
}

export default NotificationProvider;
