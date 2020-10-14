import React from 'react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';

interface PageHeaderProps {
  title: string;
  condense?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, condense }) => {
  return (
    <>
      {!condense ? (
        <IonHeader>
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
      ) : (
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}
    </>
  );
};

export default PageHeader;
