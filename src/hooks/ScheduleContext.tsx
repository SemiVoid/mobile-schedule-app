import React, { useState, useContext, useEffect } from 'react';
import { tempScheduleList } from './tempdata';

// Schedule Context Creation
interface ContextProps {
  filteredList: Schedule[];
  getScheduleForDate: (date: Date) => void;
}

const ScheduleContext = React.createContext({} as ContextProps);

// Schedule Context Custom Hook Usage
export function useScheduleContext() {
  return useContext(ScheduleContext);
}

// Schedule Provider Function Component
const ScheduleProvider: React.FC = ({ children }) => {
  const [scheduleList, setScheduleList] = useState<Schedule[]>([]);
  const [filteredList, setFilteredList] = useState<Schedule[]>([]);

  useEffect(() => {
    setScheduleList(tempScheduleList);
  }, []);

  const getScheduleForDate = (date: Date) => {
    const temp = [...scheduleList];
    setFilteredList(
      temp.filter((d) => d.date.toDateString() === date.toDateString())
    );
  };

  const value = { filteredList, getScheduleForDate };

  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
};

// Interfaces
export interface Schedule {
  id: number;
  worker: string;
  date: Date;
  startTime: string;
  endTime: string;
}

export default ScheduleProvider;
