import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import SchedChange from './SchedChange';
import { ViewDisplay } from './ViewDisplay';

export const ScheduleContent: React.FC = () => {
  const { changesMade } = useSelector((state: RootState) => state.sched);
  return (
    <>
      {changesMade && <SchedChange />}
      <ViewDisplay />
    </>
  );
};
