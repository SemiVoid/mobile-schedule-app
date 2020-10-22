import React from 'react';
import { IonContent, IonFooter } from '@ionic/react';
import { PageContentProps } from './pageTypes';

// Import Components
import PageHeader from './PageHeader';

const PageContent: React.FC<PageContentProps> = ({
  pageTitle,
  fullscreen,
  modal,
  footer,
  children,
}) => {
  return (
    <>
      <PageHeader pageTitle={pageTitle} modal={modal} />
      <IonContent fullscreen={fullscreen}>
        <PageHeader pageTitle={pageTitle} condense />
        {children}
      </IonContent>
      {footer && <IonFooter className="ion-no-border">{footer}</IonFooter>}
    </>
  );
};

export default PageContent;
