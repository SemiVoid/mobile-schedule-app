import React from 'react';

// Import Components
import { DashboardContent } from '../components/pages';
import { PageContainer } from '../components/shared';

const DashboardPage: React.FC = () => {
  return (
    <PageContainer pageTitle="Dashboard">
      <DashboardContent />
    </PageContainer>
  );
};

export default DashboardPage;
