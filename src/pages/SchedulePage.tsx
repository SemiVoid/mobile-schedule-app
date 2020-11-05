import React from 'react';

// Import Providers
import ScheduleProvider from '../hooks/ScheduleContext';
import WeekProvider from '../hooks/WeekContext';

// Import Components
import { ScheduleContent, ScheduleFooter } from '../components/pages';
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
          <ScheduleContent />
        </PageContainer>
      </WeekProvider>
    </ScheduleProvider>
  );
};

export default SchedulePage;
