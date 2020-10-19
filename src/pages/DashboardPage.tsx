import React from 'react';

// Import Components
import PageContainer from '../components/shared/Page/PageContainer';
import ScheduleCard from '../components/pages/dashboard/card/ScheduleCard';
import TaskCard from '../components/pages/dashboard/card/TaskCard';

const DashboardPage: React.FC = () => {
  return (
    <PageContainer pageTitle="Dashboard" fullscreen>
      <ScheduleCard />
      <TaskCard />
    </PageContainer>
  );
};

export default DashboardPage;
