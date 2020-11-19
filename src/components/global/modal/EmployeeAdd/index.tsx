import { IonButton, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useIonInput from '../../../../hooks/useIonInput';
import { emplAdd, RootState } from '../../../../redux';
import ModalContainer from '../../../shared/ModalContainer';

const EmployeeAdd: React.FC = () => {
  const [name, bindName] = useIonInput(undefined);
  const [department, bindDepartment] = useIonInput(undefined);
  const { employeeAdd } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

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
            <IonInput {...bindName} type="text" required />
          </IonItem>
          <IonItem>
            <IonLabel>Department</IonLabel>
            <IonInput {...bindDepartment} type="text" required />
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
