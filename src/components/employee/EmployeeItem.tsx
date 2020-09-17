import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

interface EmployeeItemProps {
  name: string;
  department: string;
}

const EmployeeItem: React.FC<EmployeeItemProps> = ({ name, department }) => {
  return (
    <IonItem>
      <IonLabel>{name}</IonLabel>
      <p>{department}</p>
    </IonItem>
  );
};

export default EmployeeItem;
