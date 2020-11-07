import { IonButton, IonCol, IonGrid, IonLabel, IonRow } from '@ionic/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { emplFetch, modalOpen } from '../../../redux';

export const EmployeeFooter: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <IonGrid fixed>
      <IonRow>
        <IonCol>
          <IonButton
            color="employee"
            onClick={() => {
              dispatch(modalOpen({ modalName: 'employeeAdd' }));
            }}
            expand="block"
          >
            <IonLabel>Add Employee</IonLabel>
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton
            color="employee"
            onClick={() => {
              dispatch(emplFetch());
            }}
            expand="block"
          >
            <IonLabel>Refresh</IonLabel>
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
