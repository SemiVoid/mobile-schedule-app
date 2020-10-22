import React from 'react';
import { IonButton, IonCol, IonGrid, IonLabel, IonRow } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { modalOpen, emplFetch } from '../../../redux';

const EmployeeFooter: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <IonGrid fixed>
      <IonRow>
        <IonCol>
          <IonButton
            onClick={() => {
              dispatch(modalOpen({ modalName: 'addEmployee' }));
            }}
            expand="block"
          >
            <IonLabel>Add Employee</IonLabel>
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton
            onClick={() => {
              dispatch(emplFetch());
            }}
            expand="block"
          >
            <IonLabel>refresh</IonLabel>
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default EmployeeFooter;
