import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emplAdd, RootState } from '../../../../redux';
import ModalContainer from '../../../shared/ModalContainer';

const EmployeeAdd: React.FC = () => {
  const { employeeAdd } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const handleAddEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(emplAdd(name, department));
  };

  return (
    <ModalContainer
      headerTitle="Add Employee"
      isModalOpen={employeeAdd}
      modal="employeeAdd"
    >
      <form
        onSubmit={(e) => {
          handleAddEmployee(e);
        }}
      >
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
        </IonList>
        <IonButton type="submit" expand="block">
          Add Employee
        </IonButton>
      </form>
    </ModalContainer>
  );
};

export default EmployeeAdd;
