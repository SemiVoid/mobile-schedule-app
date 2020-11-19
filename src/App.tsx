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
import { calendar, home, journal, menu, people } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import Wrapper from './components/global/Wrapper';
import DashboardPage from './pages/Dashboard';
import EmployeePage from './pages/Employee';
import OptionPage from './pages/Option';
import SchedulePage from './pages/Schedule';
import TaskPage from './pages/Task';
import './theme';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Wrapper>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/employee" component={EmployeePage} />
            <Route exact path="/schedule" component={SchedulePage} />
            <Route exact path="/task" component={TaskPage} />
            <Route path="/option" component={OptionPage} />
            <Redirect exact from="/" to="/dashboard" />
          </IonRouterOutlet>

          <IonTabBar slot="bottom" translucent>
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
      </Wrapper>
    </IonReactRouter>
  </IonApp>
);

export default App;
