import React from 'react';
import './ViewDisplay.css';
import { useSchedule } from '../../hooks/ScheduleContext';


const ViewDisplay: React.FC = () => {
  const schedule = useSchedule();

  const list = schedule.map((data) => {
    return (
      <div className="display-person" key={data.id}>
        <span className="display-name">{data.worker}</span>
        <span className="display-time">
          {data.startTime} - {data.endTime}
        </span>
      </div>
    );
  });

  return (
    <div className="display-background">
      <div className="display-foreground">
        {list}
      </div>
    </div>
  );
};

export default ViewDisplay;
