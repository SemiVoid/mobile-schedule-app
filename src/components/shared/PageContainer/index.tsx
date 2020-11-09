import { IonPage } from '@ionic/react';
import React from 'react';
import PageContent from '../PageContent';
import { PageContainerProps } from './types';

const PageContainer: React.FC<PageContainerProps> = ({
  headerTitle,
  headerColor,
  backButton,
  fullscreen,
  footer,
  children,
}) => {
  return (
    <IonPage>
      <PageContent
        headerTitle={headerTitle}
        headerColor={headerColor}
        backButton={backButton}
        fullscreen={fullscreen}
        footer={footer}
      >
        {children}
      </PageContent>
    </IonPage>
  );
};

export default PageContainer;
