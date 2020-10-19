import React from 'react';

// Import Components
import PageContainer from '../components/shared/Page/PageContainer';
import AccountSection from '../components/pages/option/AccountSection';

const OptionPage: React.FC = () => {
  return (
    <PageContainer pageTitle="Settings" fullscreen>
      <AccountSection />
    </PageContainer>
  );
};

export default OptionPage;
