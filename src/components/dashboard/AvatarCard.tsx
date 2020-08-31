import React from 'react';
import { IonCard, IonItem, IonTitle, IonAvatar } from '@ionic/react';

const AvatarCard: React.FC = () => {
  return (
    <IonCard routerLink="/option">
        <IonItem>
          <IonAvatar>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiupac.org%2Fwp-content%2Fuploads%2F2018%2F05%2Fdefault-avatar.png" alt=""/>
          </IonAvatar>
          <IonTitle>Logged In User</IonTitle>
        </IonItem>
    </IonCard>
  );
};

export default AvatarCard;
