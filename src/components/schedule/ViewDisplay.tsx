import React from 'react';
import './ViewDisplay.css';
import { useScheduleContext } from '../../hooks/ScheduleContext';


const ViewDisplay: React.FC = () => {
  const schedule = useScheduleContext();

  const list = schedule.filteredList.map((data) => {
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
