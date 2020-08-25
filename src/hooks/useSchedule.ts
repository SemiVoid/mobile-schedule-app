import { useState, useEffect } from 'react';

const tempScheduleList: Schedule[] = [
  {
    id: 0,
    worker: 'Brayden',
    date: new Date('8-25-2020'),
    startTime: '9:00am',
    endTime: '4:00pm',
  },
  {
    id: 1,
    worker: 'Jimmy',
    date: new Date('8-26-2020'),
    startTime: '8:00am',
    endTime: '4:00pm',
  },
  {
    id: 2,
    worker: 'Bobby',
    date: new Date('8-25-2020'),
    startTime: '9:30am',
    endTime: '3:00pm',
  },
];

function useSchedule() {
  const [scheduleList, setScheduleList] = useState<Schedule[]>([]);
  const [filteredList, setFilteredList] = useState<Schedule[]>([]);

  const getSchedulesDate = (date: Date) => {
    const temp = scheduleList.filter(data => {
      return data.date.toString() === date.toString();
    })
    setFilteredList(temp);
  };

  useEffect(() => {
    setScheduleList(tempScheduleList);
  }, [scheduleList]);

  return { scheduleList, filteredList, getSchedulesDate};
}

export interface Schedule {
  id: number;
  worker: string;
  date: Date;
  startTime: string;
  endTime: string;
}

export default useSchedule;
