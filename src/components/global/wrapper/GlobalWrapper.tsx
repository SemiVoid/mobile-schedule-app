import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

// Import Wrappers
import AuthWrapper from './type/AuthWrapper';
import ModalWrapper from './type/ModalWrapper';
import NotifWrapper from './type/NotifWrapper';

// Global Wrapper
export const GlobalWrapper: React.FC = ({ children }) => {
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
