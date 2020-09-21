import React from 'react';
import { IonButton, IonFooter, IonLabel } from '@ionic/react';
import { useModalContext } from '../../hooks/ModalContext';

const EmployeeFooter: React.FC = () => {
  const modal = useModalContext();

  return (
    <IonFooter className="ion-no-border">
      <IonButton onClick={()=>{modal.modalDispatch({type: 'openAddEmployee'})}} expand="block">
        <IonLabel>Add Employee</IonLabel>
      </IonButton>
    </IonFooter>
  );
};

export default EmployeeFooter;
