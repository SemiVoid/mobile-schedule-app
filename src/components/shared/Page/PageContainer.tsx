import React from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useDispatch } from 'react-redux';
import { modalClose } from '../../../redux';
import {
  PageContainerProps,
  PageContentProps,
  PageHeaderProps,
} from './pageTypes';

export const PageContainer: React.FC<PageContainerProps> = ({
  pageTitle,
  color,
  fullscreen,
  modal,
  footer,
  children,
}) => {
  const content = (
    <PageContent
      pageTitle={pageTitle}
      color={color}
      fullscreen={fullscreen}
      modal={modal}
      footer={footer}
    >
      {children}
    </PageContent>
  );

  return <>{modal ? content : <IonPage>{content}</IonPage>}</>;
};

const PageContent: React.FC<PageContentProps> = ({
  pageTitle,
  color,
  fullscreen,
  modal,
  footer,
  children,
}) => (
  <>
    <PageHeader pageTitle={pageTitle} color={color} modal={modal} />
    <IonContent fullscreen={fullscreen}>
      <PageHeader pageTitle={pageTitle} color={color} condense />
      <IonGrid className="ion-no-padding" fixed>
        {children}
      </IonGrid>
    </IonContent>
    {footer && <IonFooter className="ion-no-border">{footer}</IonFooter>}
  </>
);

const PageHeader: React.FC<PageHeaderProps> = ({
  pageTitle,
  color,
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
        <IonTitle color={color} size={condense ? 'large' : undefined}>
          {pageTitle}
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
