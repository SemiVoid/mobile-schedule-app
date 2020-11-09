import { IonPage, IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { Route } from 'react-router-dom';
import AccountManage from './components/AccountManage';
import OptionContent from './components/OptionContent';
import { OptionPageProps } from './types';

const OptionPage: React.FC<OptionPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path={match.url} component={OptionContent} />
        <Route exact path={`${match.url}/account`} component={AccountManage} />
      </IonRouterOutlet>
    </IonPage>
  );
};

export default OptionPage;
