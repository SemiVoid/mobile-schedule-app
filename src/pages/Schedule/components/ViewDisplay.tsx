import React from 'react';
import { useSelector } from 'react-redux';
import EmptyPage from '../../../components/shared/PageEmpty';
import { RootState } from '../../../redux';
import './ViewDisplay.css';

export const ViewDisplay: React.FC = () => {
  const { listFiltered } = useSelector((state: RootState) => state.sched);

  const list = listFiltered.map((data) => {
    return (
      <div className="display-person" key={data.id}>
        <span className="display-name">{data.name}</span>
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
