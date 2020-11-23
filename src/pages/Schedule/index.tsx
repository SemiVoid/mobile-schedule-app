import React from 'react';
import PageContainer from '../../components/shared/PageContainer';
import { ScheduleContent } from './components/ScheduleContent';
import { ScheduleFooter } from './components/ScheduleFooter';

const SchedulePage: React.FC = () => {
  return (
    <PageContainer
      headerTitle="Schedule"
      headerColor="schedule"
      footer={<ScheduleFooter />}
      fullscreen
    >
      <ScheduleContent />
    </PageContainer>
  );
};

export default SchedulePage;
