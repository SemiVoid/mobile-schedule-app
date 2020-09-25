import React from 'react';
import './ViewDisplay.css';
import { useScheduleContext } from '../../hooks/ScheduleContext';
import EmptyPage from '../shared/EmptyPage';

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
    <>
      {list.length === 0 && <EmptyPage page="Schedule" />}
      {list.length > 0 && (
        <div className="display-background ion-margin-vertical">
          <div className="display-foreground">{list}</div>
        </div>
      )}
    </>
  );
};

export default ViewDisplay;
