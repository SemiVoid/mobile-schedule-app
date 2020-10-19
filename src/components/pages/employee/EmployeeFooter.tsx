import React from 'react';
import { IonButton, IonFooter, IonLabel } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { modalOpen } from '../../../redux';

const EmployeeFooter: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <IonFooter className="ion-no-border">
      <IonButton
        onClick={() => {
          dispatch(modalOpen({modalName: 'addEmployee'}));
        }}
        expand="block"
      >
        <IonLabel>Add Employee</IonLabel>
      </IonButton>
    </IonFooter>
  );
};

export default EmployeeFooter;
