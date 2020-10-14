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
import { useDispatch, useSelector } from 'react-redux';
import { RootState, modalClose } from '../../../redux';
import { useEmployeeContext } from '../../../hooks/employee/EmployeeContext';

const AddEmployee: React.FC = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const dispatch = useDispatch();
  const { addEmployee } = useSelector((state: RootState) => state.modal);
  const employee = useEmployeeContext();

  const closeModal = () => {
    if (addEmployee) {
      dispatch(modalClose({ modalName: 'addEmployee' }));
    }
  };

  const handleAddEmployee = () => {
    employee.handleAddEmployee(name, department);
  };

  return (
    <IonModal isOpen={addEmployee} onDidDismiss={closeModal}>
      <PageHeader title="Add New Employees" modal="addEmployee" />
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
