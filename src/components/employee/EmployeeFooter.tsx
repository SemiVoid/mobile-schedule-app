import React from 'react';
import { IonButton, IonFooter, IonLabel } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { toggleAddEmployee } from '../../redux';

const EmployeeFooter: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <IonFooter className="ion-no-border">
      <IonButton
        onClick={() => {
          dispatch(toggleAddEmployee());
        }}
        expand="block"
      >
        <IonLabel>Add Employee</IonLabel>
      </IonButton>
    </IonFooter>
  );
};

export default EmployeeFooter;
