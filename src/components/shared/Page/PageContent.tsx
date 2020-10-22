import React from 'react';
import { IonContent } from '@ionic/react';
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
      {footer && footer}
    </>
  );
};

export default PageContent;