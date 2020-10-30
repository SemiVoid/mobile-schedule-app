import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

// Import Wrappers
import AuthWrapper from './AuthWrapper';
import ModalWrapper from './ModalWrapper';
import NotifWrapper from './NotifWrapper';

// Global Wrapper
const GlobalWrapper: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <AuthWrapper>
        <ModalWrapper>
          <NotifWrapper>{children}</NotifWrapper>
        </ModalWrapper>
      </AuthWrapper>
    </Provider>
  );
};

export default GlobalWrapper;
