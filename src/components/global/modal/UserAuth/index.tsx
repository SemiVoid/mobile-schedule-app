import { IonText } from '@ionic/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux';
import ModalContainer from '../../../shared/ModalContainer';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';

const UserAuth: React.FC = () => {
  const { userAuth } = useSelector((state: RootState) => state.modal);
  const [register, setRegister] = useState(false);

  const handleSwitch = () => {
    setRegister(!register);
  };

  return (
    <ModalContainer
      headerTitle={register ? 'Register User' : 'Login User'}
      isModalOpen={userAuth}
    >
      <IonText color="secondary" onClick={handleSwitch}>
        <p className="ion-text-end">
          {register
            ? 'Already have an account? Go to Login.'
            : 'Want to create an account? Go to Register.'}
        </p>
      </IonText>
      {!register && <UserLogin />}
      {register && <UserRegister />}
    </ModalContainer>
  );
};

export default UserAuth;
