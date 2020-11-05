import React from 'react';

// Import Components
import { EmployeeContent, EmployeeFooter } from '../components/pages';
import { PageContainer } from '../components/shared';

const EmployeePage: React.FC = () => {
  return (
    <PageContainer
      pageTitle="Employee"
      color="employee"
      footer={<EmployeeFooter />}
      fullscreen
    >
      <EmployeeContent />
    </PageContainer>
  );
};

export default EmployeePage;
