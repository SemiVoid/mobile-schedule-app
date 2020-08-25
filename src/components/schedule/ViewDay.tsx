import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import './ViewDay.css';
import { Week } from '../../hooks/useWeekday';

interface CardProps {
  listNum: Week[];
}

const ViewDay: React.FC<CardProps> = ({ listNum }) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

  const dayList = days.map((day) => <IonCol key={day}>{day}</IonCol>);

  const dayListNum = listNum.map((data) =>
    data.days.map((day) => <IonCol key={day.getDate()}>{day.getDate()}</IonCol>)
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
          <span>view-day selection</span>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ViewDay;
