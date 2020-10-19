import React from 'react';
import { IonPage } from '@ionic/react';
import { PageContainerProps } from './pageTypes';

// Import Components
import PageContent from './PageContent';

const PageContainer: React.FC<PageContainerProps> = ({
  pageTitle,
  fullscreen,
  modal,
  footer,
  children,
}) => {
  const content = (
    <PageContent pageTitle={pageTitle} fullscreen={fullscreen} modal={modal} footer={footer}>
      {children}
    </PageContent>
  );

  return <>{modal ? content : <IonPage>{content}</IonPage>}</>;
};

export default PageContainer;
