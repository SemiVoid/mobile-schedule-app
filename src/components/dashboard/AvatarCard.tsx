import React from 'react';
import { IonCard, IonItem, IonIcon, IonTitle } from '@ionic/react';
import { personCircle } from 'ionicons/icons';

const AvatarCard: React.FC = () => {
  return (
    <IonCard routerLink="/option">
        <IonItem>
          <IonIcon icon={personCircle} />
          <IonTitle>Logged In User</IonTitle>
        </IonItem>
    </IonCard>
  );
};

export default AvatarCard;
