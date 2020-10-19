import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

// Import Wrappers
import ModalWrapper from './ModalWrapper';
import NotifWrapper from './NotifWrapper';

// Global Wrapper
const GlobalWrapper: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ModalWrapper>
        <NotifWrapper>{children}</NotifWrapper>
      </ModalWrapper>
    </Provider>
  );
};

export default GlobalWrapper;
