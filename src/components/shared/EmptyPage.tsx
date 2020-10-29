import { IonRow, IonText } from '@ionic/react';
import React from 'react';
import './EmptyPage.css';

interface EmptyPageProps {
  page: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ page }) => {
  return (
    <IonRow className="empty-container ion-align-items-center">
      {page === 'Employee' && (
        <IonText className="ion-text-center">
          There is currently no employees. If you wish to start adding employees
          then click the add Employee button below. Then refresh the page to see
          the changes.
        </IonText>
      )}
      {page === 'Schedule' && (
        <IonText className="ion-text-center">
          There is currently no schedules for the selected date.
        </IonText>
      )}
    </IonRow>
  );
};

export default EmptyPage;
