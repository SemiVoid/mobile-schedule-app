import { IonPage, IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { Route, useRouteMatch } from 'react-router';
import AccountManage from './components/AccountManage';
import OptionContent from './components/OptionContent';

const OptionPage: React.FC = () => {
  let { path } = useRouteMatch();

  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path={path} component={OptionContent} />
        <Route exact path={`${path}/account`} component={AccountManage} />
      </IonRouterOutlet>
    </IonPage>
  );
};

export default OptionPage;
