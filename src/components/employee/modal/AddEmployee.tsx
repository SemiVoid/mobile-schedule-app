import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
} from '@ionic/react';
import PageHeader from '../../shared/PageHeader';
import { useModalContext } from '../../../hooks/ModalContext';
import { db } from '../../../config/firebase';

interface AddEmployeeProps {
  addEmployeeModal: boolean;
}

const AddEmployee: React.FC<AddEmployeeProps> = ({ addEmployeeModal }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const modalControl = useModalContext();

  const handleAddEmployee = () => {
    db
      .collection('workers')
      .add({ workerName: name, workerDep: department })
      .then((data) => {
        console.log(data);
      });
  };

  const closeModal = () => {
    modalControl.modalDispatch({ type: 'closeAddEmployee' });
  };

  return (
    <IonModal isOpen={addEmployeeModal}>
      <PageHeader title="Add New Employees" />
      <IonContent fullscreen>
        <PageHeader title="Add New Employees" condense />
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
      </IonContent>
    </IonModal>
  );
};

export default AddEmployee;
