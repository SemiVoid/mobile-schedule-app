import { IonBadge, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from '@ionic/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { emplDelete } from '../../../redux';

interface EmployeeItemProps {
  id?: string;
  name: string;
  department: string;
}

export const EmployeeItem: React.FC<EmployeeItemProps> = ({
  id,
  name,
  department,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(emplDelete(id as string));
  }

  return (
    <IonItemSliding>
      <IonItem>
        <IonLabel>{name}</IonLabel>
        <IonBadge color="dark">{department}</IonBadge>
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption color="danger" onClick={handleDelete}>
          Delete
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};
