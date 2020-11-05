import React from 'react';
import { IonBadge, IonItem, IonLabel } from '@ionic/react';

interface EmployeeItemProps {
  name: string;
  department: string;
}

export const EmployeeItem: React.FC<EmployeeItemProps> = ({
  name,
  department,
}) => {
  return (
    <IonItem>
      <IonLabel>{name}</IonLabel>
      <IonBadge color="dark">{department}</IonBadge>
    </IonItem>
  );
};
