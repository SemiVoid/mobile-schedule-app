import { IonButton, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { emplFetch, emplSend } from '../../../redux';

const EmplChange: React.FC = () => {
  const dispatch = useDispatch();

  const handleRevert = () => {
    dispatch(emplFetch('employeeList'));
  };

  const handleSubmit = () => {
    dispatch(emplSend());
  };

  return (
    <IonItem>
      <IonLabel>Changes Were made.</IonLabel>
      <IonButton color="warning" onClick={handleRevert}>Revert</IonButton>
      <IonButton onClick={handleSubmit}>Submit</IonButton>
    </IonItem>
  );
};

export default EmplChange;
