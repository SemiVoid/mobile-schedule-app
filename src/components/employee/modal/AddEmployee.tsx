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
import { RootState, toggleAddEmployee } from '../../../redux';
import { useEmployeeContext } from '../../../hooks/employee/EmployeeContext';

interface AddEmployeeProps {
  addEmployeeModal: boolean;
}

const AddEmployee: React.FC<AddEmployeeProps> = ({ addEmployeeModal }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const dispatch = useDispatch();
  const { modalAddEmployee } = useSelector((state: RootState) => state.modal);
  const employee = useEmployeeContext();

  const closeModal = () => {
    if (modalAddEmployee) {
      dispatch(toggleAddEmployee());
    }
  };

  const handleAddEmployee = () => {
    employee.handleAddEmployee(name, department);
  };

  return (
    <IonModal isOpen={addEmployeeModal} onDidDismiss={closeModal}>
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
