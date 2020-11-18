import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import AuthWrapper from './components/AuthWrapper';
import ModalWrapper from './components/ModalWrapper';
import NotifWrapper from './components/NotifWrapper';

const Wrapper: React.FC = ({ children }) => {
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

export default Wrapper;
