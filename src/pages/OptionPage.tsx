import React from 'react';

// Import Components
import { OptionContent } from '../components/pages';
import { PageContainer } from '../components/shared';

const OptionPage: React.FC = () => {
  return (
    <PageContainer pageTitle="Settings" fullscreen>
      <OptionContent />
    </PageContainer>
  );
};

export default OptionPage;
