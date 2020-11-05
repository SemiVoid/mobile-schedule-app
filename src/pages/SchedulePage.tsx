import React from 'react';

// Import Providers
import ScheduleProvider from '../hooks/ScheduleContext';
import WeekProvider from '../hooks/WeekContext';

// Import Components
import { ScheduleFooter, ViewDisplay } from '../components/pages';
import { PageContainer } from '../components/shared';

const SchedulePage: React.FC = () => {
  return (
    <ScheduleProvider>
      <WeekProvider>
        <PageContainer
          pageTitle="Schedule"
          color="schedule"
          footer={<ScheduleFooter />}
          fullscreen
        >
          <ViewDisplay />
        </PageContainer>
      </WeekProvider>
    </ScheduleProvider>
  );
};

export default SchedulePage;
