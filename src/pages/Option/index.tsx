import React from 'react';
import PageContainer from '../../components/shared/PageContainer';
import { OptionContent } from './components/OptionContent';

const OptionPage: React.FC = () => {
  return (
    <PageContainer headerTitle="Settings" fullscreen>
      <OptionContent />
    </PageContainer>
  );
};

export default OptionPage;
