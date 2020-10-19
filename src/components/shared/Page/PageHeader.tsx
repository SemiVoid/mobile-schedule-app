import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
} from '@ionic/react';
import { useDispatch } from 'react-redux';
import { modalClose } from '../../../redux';
import { PageHeaderProps } from './pageTypes';

const PageHeader: React.FC<PageHeaderProps> = ({
  pageTitle,
  condense,
  modal,
}) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    if (modal) {
      dispatch(modalClose({ modalName: modal }));
    }
  };

  return (
    <IonHeader
      collapse={condense ? 'condense' : undefined}
      translucent={!condense}
    >
      <IonToolbar>
        <IonTitle size={condense ? 'large' : undefined}>{pageTitle}</IonTitle>
        {modal && !condense && (
          <IonButtons slot="secondary">
            <IonButton color="danger" onClick={handleClose}>
              Close
            </IonButton>
          </IonButtons>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;
