import { IonText } from '@ionic/react';
import React from 'react';
import './EmptyPage.css';

interface EmptyPageProps {
  page: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ page }) => {
  return (
    <div className="empty-container">
      {page === 'Employee' && (
        <IonText color="secondary">
          There is currently no employees tied to this account. If you wish to
          start adding employees then click the add Employee button below.
        </IonText>
      )}
      {page === 'Schedule' && (
        <IonText color="secondary">
          There is currently no schedules for the selected date.
        </IonText>
      )}
    </div>
  );
};

export default EmptyPage;
