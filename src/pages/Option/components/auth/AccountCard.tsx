import {
  IonAvatar,
  IonCard,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
} from '@ionic/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux';

interface AccountCardProps {
  expand?: boolean;
}

const AccountCard: React.FC<AccountCardProps> = ({ expand }) => {
  const account = useSelector((state: RootState) => state.auth.account);

  return (
    <IonCard>
      <IonItem hidden={!expand} lines="none">
        <IonLabel>
          Email: <IonText color="secondary">{account?.email}</IonText>
        </IonLabel>
      </IonItem>

      <IonItem
        {...(!expand && {
          routerLink: '/option/account',
          button: true,
          detail: true,
        })}
      >
        <IonAvatar slot="start">
          <IonImg
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </IonAvatar>
        <IonLabel>
          Hello, <IonText color="secondary">{account?.displayName}</IonText>
        </IonLabel>
      </IonItem>
    </IonCard>
  );
};

export default AccountCard;
