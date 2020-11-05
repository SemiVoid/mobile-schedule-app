import React, { useState } from 'react';
import { IonModal, IonText } from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux';

// Import Components
import { PageContainer } from '../../../shared';
import { LoginUser } from './LoginUser';
import { RegisterUser } from './RegisterUser';

export const UserAuth: React.FC = () => {
  const { login } = useSelector((state: RootState) => state.modal);
  const [register, setRegister] = useState(false);

  const handleSwitch = () => {
    setRegister(!register);
  };

  return (
    <IonModal isOpen={login} backdropDismiss={false}>
      <PageContainer pageTitle={register ? 'Register' : 'Login'} fullscreen>
        <IonText color="secondary" onClick={handleSwitch}>
          <p className="ion-text-end">
            {register
              ? 'Already have an account? Go to Login.'
              : 'Want to create an account? Go to Register.'}
          </p>
        </IonText>
        {!register && <LoginUser />}
        {register && <RegisterUser />}
      </PageContainer>
    </IonModal>
  );
};
