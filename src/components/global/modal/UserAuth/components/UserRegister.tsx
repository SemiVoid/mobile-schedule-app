import React from 'react';
import { IonButton, IonList } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, userRegister } from '../../../../../redux';
import FormInput from '../../../../shared/FormInput';

const UserRegister: React.FC = () => {
  const { displayName, email, password, verifyPassword } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userRegister());
  };

  return (
    <form onSubmit={(e) => handleSignup(e)}>
      <IonList className="ion-margin-vertical">
        <FormInput
          required
          text="Display Name"
          field="displayName"
          value={displayName}
        />
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
        <FormInput
          required
          type="password"
          text="Verify Password"
          field="verifyPassword"
          value={verifyPassword}
        />
      </IonList>
      <IonButton expand="block" type="submit">
        Signup
      </IonButton>
    </form>
  );
};

export default UserRegister;
