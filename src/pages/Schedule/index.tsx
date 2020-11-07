import React from 'react';
import PageContainer from '../../components/shared/PageContainer';
import ScheduleProvider from '../../hooks/ScheduleContext';
import WeekProvider from '../../hooks/WeekContext';
import { ScheduleContent } from './components/ScheduleContent';
import { ScheduleFooter } from './components/ScheduleFooter';

const SchedulePage: React.FC = () => {
  return (
    <ScheduleProvider>
      <WeekProvider>
        <PageContainer
          headerTitle="Schedule"
          headerColor="schedule"
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
