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

// Import Global Wrappers
import GlobalWrapper from './components/wrapper/GlobalWrapper';

// Import Global Providers
import EmployeeProvider from './hooks/employee/EmployeeContext';

// Import Pages
import DashboardPage from './pages/DashboardPage';
import EmployeePage from './pages/EmployeePage';
import SchedulePage from './pages/SchedulePage';
import TaskPage from './pages/TaskPage';
import OptionPage from './pages/OptionPage';

const App: React.FC = () => (
  <GlobalWrapper>
    <IonApp>
      <EmployeeProvider>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/dashboard" component={DashboardPage} exact />
              <Route path="/employee" component={EmployeePage} exact />
              <Route path="/schedule" component={SchedulePage} exact />
              <Route path="/task" component={TaskPage} exact />
              <Route path="/option" component={OptionPage} exact />
              <Route
                path="/"
                render={() => <Redirect to="/dashboard" />}
                exact
              />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="dashboard" href="/dashboard">
                <IonIcon icon={home} />
                <IonLabel>Dashboard</IonLabel>
              </IonTabButton>
              <IonTabButton tab="employee" href="/employee">
                <IonIcon icon={people} />
                <IonLabel>Employee</IonLabel>
              </IonTabButton>
              <IonTabButton tab="schedule" href="/schedule">
                <IonIcon icon={calendar} />
                <IonLabel>Schedule</IonLabel>
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
      </EmployeeProvider>
    </IonApp>
  </GlobalWrapper>
);

export default App;
