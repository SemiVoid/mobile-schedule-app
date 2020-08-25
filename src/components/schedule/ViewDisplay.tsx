import React from 'react';
import './ViewDisplay.css';
import { Schedule } from '../../hooks/useSchedule';

interface DisplayProps {
  listSchedule: Schedule[];
}

const ViewDisplay: React.FC<DisplayProps> = ({ listSchedule }) => {
  const list = listSchedule.map((data) => {
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
        test
        {list}
      </div>
    </div>
  );
};

export default ViewDisplay;
