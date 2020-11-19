import React from 'react';
import PageContainer from '../../components/shared/PageContainer';
import DashboardContent from './components/DashboardContent';

const DashboardPage: React.FC = () => {
  return (
    <PageContainer headerTitle="Dashboard" fullscreen>
      <DashboardContent />
    </PageContainer>
  );
};

export default DashboardPage;
