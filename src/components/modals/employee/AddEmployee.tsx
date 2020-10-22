import React, { useState } from 'react';
import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
} from '@ionic/react';
import PageContainer from '../../shared/Page/PageContainer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, modalClose } from '../../../redux';

export const AddEmployee: React.FC = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const dispatch = useDispatch();
  const { addEmployee } = useSelector((state: RootState) => state.modal);

  const closeModal = () => {
    if (addEmployee) {
      dispatch(modalClose({ modalName: 'addEmployee' }));
    }
  };

  const handleAddEmployee = () => {
    
  };

  return (
    <IonModal isOpen={addEmployee} onDidDismiss={closeModal}>
      <PageContainer pageTitle="Add Employees" modal="addEmployee" fullscreen>
        <IonList className="ion-margin-vertical">
          <IonItem>
            <IonLabel>Name</IonLabel>
            <IonInput
              type="text"
              required
              value={name}
              onIonChange={(e) => {
                setName(e.detail.value as string);
              }}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Department</IonLabel>
            <IonInput
              type="text"
              required
              value={department}
              onIonChange={(e) => {
                setDepartment(e.detail.value as string);
              }}
            ></IonInput>
          </IonItem>
          <IonItem lines="none">
            <IonButton onClick={closeModal} slot="end">
              Close Modal
            </IonButton>
            <IonButton onClick={handleAddEmployee} slot="end">
              Add User
            </IonButton>
          </IonItem>
        </IonList>
      </PageContainer>
    </IonModal>
  );
};
