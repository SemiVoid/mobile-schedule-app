import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, calendar, fileTrayFull, menu } from 'ionicons/icons';
import DashboardPage from './pages/DashboardPage';
import OptionPage from './pages/OptionPage';
import SchedulePage from './pages/SchedulePage';
import TaskPage from './pages/TaskPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/dashboard" component={DashboardPage} exact={true} />
          <Route path="/schedule" component={SchedulePage} exact={true} />
          <Route path="/task" component={TaskPage} exact={true} />
          <Route path="/option" component={OptionPage} exact={true}/>
          <Route
            path="/"
            render={() => <Redirect to="/dashboard" />}
            exact={true}
          />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="dashboard" href="/dashboard">
            <IonIcon icon={home} />
            <IonLabel>Dashboard</IonLabel>
          </IonTabButton>
          <IonTabButton tab="schedule" href="/schedule">
            <IonIcon icon={calendar} />
            <IonLabel>Schedule</IonLabel>
          </IonTabButton>
          <IonTabButton tab="task" href="/task">
            <IonIcon icon={fileTrayFull} />
            <IonLabel>Task</IonLabel>
          </IonTabButton>
          <IonTabButton tab="option" href="/option">
            <IonIcon icon={menu} />
            <IonLabel>Options</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
