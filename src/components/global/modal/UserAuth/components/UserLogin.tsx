import { IonButton, IonList } from '@ionic/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, userLogin } from '../../../../../redux';
import FormInput from '../../../../shared/FormInput';

const UserLogin: React.FC = () => {
  const { email, password } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogin());
  };

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <IonList className="ion-margin-vertical">
        <FormInput
          required
          type="email"
          text="Email"
          field="email"
          value={email}
        />
        <FormInput
          required
          type="password"
          text="Password"
          field="password"
          value={password}
        />
      </IonList>
      <IonButton expand="block" type="submit">
        Log In
      </IonButton>
    </form>
  );
};

export default UserLogin;
