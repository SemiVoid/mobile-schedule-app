import React, { useState, useContext, useEffect } from 'react';

const tempScheduleList: Schedule[] = [
  {
    id: 0,
    worker: 'Brayden',
    date: new Date("August 21, 2020"),
    startTime: '9:00am',
    endTime: '4:00pm',
  },
  {
    id: 1,
    worker: 'Jimmy',
    date: new Date("August 21, 2020"),
    startTime: '8:00am',
    endTime: '4:00pm',
  },
  {
    id: 2,
    worker: 'Bobby',
    date: new Date("August 24, 2020"),
    startTime: '9:30am',
    endTime: '3:00pm',
  },
  {
    id: 3,
    worker: 'Emma',
    date: new Date("August 24, 2020"),
    startTime: '9:30am',
    endTime: '3:00pm',
  },
  {
    id: 4,
    worker: 'Jill',
    date: new Date("August 25, 2020"),
    startTime: '9:30am',
    endTime: '3:00pm',
  },
  {
    id: 5,
    worker: 'Bob',
    date: new Date("August 25, 2020"),
    startTime: '9:30am',
    endTime: '3:00pm',
  },
  {
    id: 6,
    worker: 'Sandra',
    date: new Date("August 26, 2020"),
    startTime: '9:25am',
    endTime: '3:04pm',
  },
  {
    id: 7,
    worker: 'Brenda',
    date: new Date("August 26, 2020"),
    startTime: '9:25am',
    endTime: '3:04pm',
  },
  {
    id: 8,
    worker: 'Elizabeth',
    date: new Date("August 27, 2020"),
    startTime: '9:25am',
    endTime: '3:04pm',
  },
  {
    id: 9,
    worker: 'Beth',
    date: new Date("August 28, 2020"),
    startTime: '9:25am',
    endTime: '3:04pm',
  },
];

// Schedule Context Creation
const ScheduleContext = React.createContext<Schedule[]>([]);
const ScheduleUpdateContext = React.createContext((date: Date) => {});

// Schedule Context Custom Hook Usage
export function useSchedule() {
  return useContext(ScheduleContext);
}
export function useScheduleUpdate() {
  return useContext(ScheduleUpdateContext);
}

// Schedule Provider Function Component
const ScheduleProvider: React.FC = ({ children }) => {
  const [scheduleList, setScheduleList] = useState<Schedule[]>([]);
  const [filteredList, setFilteredList] = useState<Schedule[]>([]);

  useEffect(() => {
    setScheduleList(tempScheduleList);
  }, []);

  const getScheduleForDate = (date: Date) => {
    const temp = [...scheduleList]
    setFilteredList(temp.filter((d) => d.date.toDateString() === date.toDateString()));
  }

  return (
    <ScheduleContext.Provider value={filteredList}>
      <ScheduleUpdateContext.Provider value={getScheduleForDate}>
        {children}
      </ScheduleUpdateContext.Provider>
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
