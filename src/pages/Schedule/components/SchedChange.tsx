import { IonButton, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { schedFetch, schedSend } from '../../../redux';

const SchedChange: React.FC = () => {
  const dispatch = useDispatch();

  const handleRevert = () => {
    dispatch(schedFetch('listTemp'));
  };

  const handleSubmit = () => {
    dispatch(schedSend());
  };

  return (
    <IonItem>
      <IonLabel>Changes Were made.</IonLabel>
      <IonButton color="warning" onClick={handleRevert}>
        Revert
      </IonButton>
      <IonButton onClick={handleSubmit}>Submit</IonButton>
    </IonItem>
  );
};

export default SchedChange;
