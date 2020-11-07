import { IonContent, IonFooter, IonGrid } from '@ionic/react';
import React from 'react';
import PageHeader from '../PageHeader';
import { PageContentProps } from './types';

const PageContent: React.FC<PageContentProps> = ({
  withHeader = true,
  headerTitle,
  headerColor,
  fullscreen,
  modal,
  footer,
  children,
}) => (
  <>
    {withHeader && (
      <PageHeader
        headerTitle={headerTitle}
        headerColor={headerColor}
        modal={modal}
      />
    )}
    <IonContent fullscreen={fullscreen}>
      {withHeader && (
        <PageHeader
          headerTitle={headerTitle}
          headerColor={headerColor}
          condense
        />
      )}
      <IonGrid className="ion-no-padding" fixed>
        {children}
      </IonGrid>
    </IonContent>
    {footer && <IonFooter className="ion-no-border">{footer}</IonFooter>}
  </>
);

export default PageContent;
