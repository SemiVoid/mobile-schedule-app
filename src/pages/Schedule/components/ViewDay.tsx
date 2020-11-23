import { IonCol, IonGrid, IonRow, IonText } from '@ionic/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, schedFetch, schedFilter } from '../../../redux';
import './ViewDay.css';

const ViewDay: React.FC = () => {
  const { weekList } = useSelector(
    (state: RootState) => state.sched.weekLayout
  );
  const { list, currentDay } = useSelector((state: RootState) => state.sched);
  const dispatch = useDispatch();

  function handleToggleDay(date: Date) {
    dispatch(schedFilter(date));
  }

  const handleListChange = () => {
    dispatch(schedFetch('listTemp'));
  };

  useEffect(handleListChange, [list]);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

  const dayList = days.map((day) => <IonCol key={day}>{day}</IonCol>);

  const dayListNum = weekList.map((data) => (
    <IonCol
      onClick={() => {
        handleToggleDay(data);
      }}
      key={data.getDate()}
    >
      <IonText color={currentDay === data ? 'primary' : undefined}>
        {data.getDate()}
      </IonText>
    </IonCol>
  ));

  return (
    <IonGrid className="day-calendar">
      {/* Day Display */}
      <IonRow>
        <IonCol>
          <IonGrid>
            <IonRow className="day">{dayList}</IonRow>
            <IonRow className="day day-num">{dayListNum}</IonRow>
          </IonGrid>
        </IonCol>
      </IonRow>

      {/* Selected Day Display */}
      <IonRow>
        <IonCol className="day-selection">
          <span>{currentDay?.toDateString()}</span>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ViewDay;
