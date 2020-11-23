import {
  IonButton,
  IonDatetime,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useIonInput from '../../../../hooks/useIonInput';
import { RootState, schedAdd } from '../../../../redux';
import ModalContainer from '../../../shared/ModalContainer';

const ScheduleAdd: React.FC = () => {
  const { scheduleAdd } = useSelector((state: RootState) => state.modal);
  const [name, bindName, , resetName] = useIonInput(undefined);
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const dispatch = useDispatch();

  const handleAddSchedule = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(schedAdd(name, selectedStartTime, selectedEndTime, selectedDate))
    resetName();
    setSelectedStartTime('');
    setSelectedEndTime('');
    setSelectedDate('');
    console.log(selectedDate, selectedStartTime, selectedEndTime);
  };

  return (
    <ModalContainer
      headerTitle="Add Schedule"
      isModalOpen={scheduleAdd}
      modal="scheduleAdd"
    >
      <form
        onSubmit={(e) => {
          handleAddSchedule(e);
        }}
      >
        <IonList className="ion-margin-vertical">
          <IonItem>
            <IonLabel>Name</IonLabel>
            <IonInput {...bindName} type="text" required />
          </IonItem>
          <IonItem>
            <IonLabel>Start Time</IonLabel>
            <IonDatetime
              displayFormat="h:mm A"
              minuteValues="0,15,30,45"
              value={selectedStartTime}
              onIonChange={(e) => setSelectedStartTime(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>End Time</IonLabel>
            <IonDatetime
              displayFormat="h:mm A"
              minuteValues="0,15,30,45"
              value={selectedEndTime}
              onIonChange={(e) => setSelectedEndTime(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>MM DD YY</IonLabel>
            <IonDatetime
              displayFormat="MM DD YYYY"
              placeholder="Select Date"
              value={selectedDate}
              onIonChange={(e) => setSelectedDate(e.detail.value!)}
            />
          </IonItem>
        </IonList>
        <IonButton type="submit" expand="block">
          Add Schedule
        </IonButton>
      </form>
    </ModalContainer>
  );
};

export default ScheduleAdd;
