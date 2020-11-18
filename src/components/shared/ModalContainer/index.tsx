import { IonModal } from '@ionic/react';
import React from 'react';
import PageContent from '../PageContent';
import { ModalContainerProps } from './types';

const ModalContainer: React.FC<ModalContainerProps> = ({
  headerTitle,
  headerColor,
  withHeader,
  modal,
  isModalOpen,
  fullscreen,
  footer,
  children,
}) => {
  return (
    <IonModal isOpen={isModalOpen} backdropDismiss={false}>
      <PageContent
        headerTitle={headerTitle}
        headerColor={headerColor}
        withHeader={withHeader}
        modal={modal}
        fullscreen={fullscreen}
        footer={footer}
      >
        {children}
      </PageContent>
    </IonModal>
  );
};

export default ModalContainer;
