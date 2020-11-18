import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React, { useState } from 'react';
import { useScheduleContext } from '../../../hooks/ScheduleContext';
import { useWeekContext } from '../../../hooks/WeekContext';
import './ViewDay.css';

const ViewDay: React.FC = () => {
  const [currentDay, setCurrentDay] = useState<Date>(new Date());
  const week = useWeekContext();
  const schedule = useScheduleContext();

  function toggleCurrDay(date: Date) {
    schedule.getScheduleForDate(date);
    setCurrentDay(date);
  }

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

  const dayList = days.map((day) => <IonCol key={day}>{day}</IonCol>);

  const dayListNum = week.weekList.map((data) =>
    data.days.map((day) => (
      <IonCol
        onClick={() => {
          toggleCurrDay(day);
        }}
        key={day.getDate()}
      >
        {day.getDate()}
      </IonCol>
    ))
  );

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
