import React, { useEffect, useState } from 'react';
import { IonContent, IonList, IonPage } from '@ionic/react';
import PageHeader from '../../components/shared/PageHeader';
import EmployeeFooter from '../../components/employee/EmployeeFooter';
import { db } from '../../config/firebase';
import EmployeeItem from '../../components/employee/EmployeeItem';

const EmployeePage: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);

  useEffect(() => {
    let array: any = [];

    db.collection('workers')
      .get()
      .then((snapshot) => {
        snapshot.docChanges().forEach((data) => {
          array.push(data.doc.data());
          console.log(data.doc.data());
        });
        setEmployees(array);
      });
  }, []);

  return (
    <IonPage>
      <PageHeader title="Employees" />
      <IonContent fullscreen>
        <PageHeader title="Employees" condense />
        <IonList className="ion-margin-vertical">
        {employees.map((data) => (
          <EmployeeItem key={data.workerName} name={data.workerName} department={data.workerDep} />
        ))}
        </IonList>
      </IonContent>
      <EmployeeFooter />
    </IonPage>
  );
};

export default EmployeePage;
