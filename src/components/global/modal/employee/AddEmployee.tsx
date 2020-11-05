import React, { useState } from 'react';
import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
} from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, modalClose, emplAdd } from '../../../../redux';

// Import Components
import { PageContainer } from '../../../shared';

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

  const handleAddEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(emplAdd(name, department));
  };

  return (
    <IonModal isOpen={addEmployee} onDidDismiss={closeModal}>
      <PageContainer pageTitle="Add Employees" modal="addEmployee" fullscreen>
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
      </PageContainer>
    </IonModal>
  );
};
