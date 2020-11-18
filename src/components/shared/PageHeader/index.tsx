import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { modalClose } from '../../../redux';
import { PageHeaderProps } from './types';

const PageHeader: React.FC<PageHeaderProps> = ({
  headerTitle,
  headerColor,
  condense,
  modal,
  backButton,
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
        {backButton && !condense && (
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        )}
        <IonTitle color={headerColor} size={condense ? 'large' : undefined}>
          {headerTitle}
        </IonTitle>
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
