import React from 'react';

// Import Wrappers
import ModalWrapper from './modal/ModalWrapper';

// Global Wrapper
const GlobalWrapper: React.FC = ({ children }) => {
  return <ModalWrapper>{children}</ModalWrapper>;
};

export default GlobalWrapper;
