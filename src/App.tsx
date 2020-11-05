import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { home, calendar, menu, people, journal } from 'ionicons/icons';

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
import './theme/custom.css';

// Import Global Wrapper
import GlobalWrapper from './components/wrapper/GlobalWrapper';

// Import Pages
import DashboardPage from './pages/DashboardPage';
import EmployeePage from './pages/EmployeePage';
import SchedulePage from './pages/SchedulePage';
import TaskPage from './pages/TaskPage';
import OptionPage from './pages/OptionPage';

const App: React.FC = () => (
  <GlobalWrapper>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/employee" component={EmployeePage} />
            <Route exact path="/schedule" component={SchedulePage} />
            <Route exact path="/task" component={TaskPage} />
            <Route exact path="/option" component={OptionPage} />
            <Redirect exact from="/" to="/dashboard" />
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
            <IonTabButton tab="employee" href="/employee">
              <IonIcon icon={people} />
              <IonLabel>Employee</IonLabel>
            </IonTabButton>
            <IonTabButton tab="task" href="/task">
              <IonIcon icon={journal} />
              <IonLabel>Task</IonLabel>
            </IonTabButton>
            <IonTabButton tab="option" href="/option">
              <IonIcon icon={menu} />
              <IonLabel>More</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </GlobalWrapper>
);

export default App;
