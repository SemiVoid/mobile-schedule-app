import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
} from '@ionic/react';
import { useDispatch } from 'react-redux';
import { Modals, modalClose } from '../../redux';

interface PageHeaderProps {
  title: string;
  condense?: boolean;
  modal?: Modals;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, condense, modal }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    if (modal) {
      dispatch(modalClose({ modalName: modal}));
    }
  };

  if (condense) {
    return (
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  } else {
    return (
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
          {modal && (
            <IonButtons slot="secondary">
              <IonButton color="danger" onClick={handleClose}>Close</IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
    );
  }
};

export default PageHeader;
