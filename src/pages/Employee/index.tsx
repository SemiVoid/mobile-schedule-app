import React from 'react';
import PageContainer from '../../components/shared/PageContainer';
import { EmployeeContent } from './components/EmployeeContent';
import { EmployeeFooter } from './components/EmployeeFooter';

const EmployeePage: React.FC = () => {
  return (
    <PageContainer
      headerTitle="Employee"
      headerColor="employee"
      footer={<EmployeeFooter />}
      fullscreen
    >
      <EmployeeContent />
    </PageContainer>
  );
};

export default EmployeePage;
