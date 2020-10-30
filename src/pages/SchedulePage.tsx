import React from 'react';

// Import Providers
import ScheduleProvider from '../hooks/ScheduleContext';
import WeekProvider from '../hooks/WeekContext';

// Import Components
import PageContainer from '../components/shared/Page/PageContainer';
import ViewDisplay from '../components/pages/schedule/ViewDisplay';
import ScheduleFooter from '../components/pages/schedule/ScheduleFooter';

const SchedulePage: React.FC = () => {
  return (
    <ScheduleProvider>
      <WeekProvider>
        <PageContainer pageTitle="Schedule" color="schedule" footer={<ScheduleFooter />} fullscreen>
          <ViewDisplay />
        </PageContainer>
      </WeekProvider>
    </ScheduleProvider>
  );
};

export default SchedulePage;
