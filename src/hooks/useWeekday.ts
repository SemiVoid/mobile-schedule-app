import { useState, useEffect } from 'react';

function useWeekday() {
  const [weekDayList, setWeekdayList] = useState<Week[]>([]);
  const [weekIndex, setWeekIndex] = useState(0);

  useEffect(() => {
    let tempList: Week[] = [];
    const tempWeek: Week = generateWeek(weekIndex);
    tempList.push(tempWeek);
    setWeekdayList(tempList);

    return () => {};
  }, [weekIndex]);

  return { weekDayList, weekIndex, setWeekIndex };
}

function generateWeek(index: number): Week {
  let tempWeekIndex = index;
  let tempIndexStart = tempWeekIndex * 7;
  let tempIndexEnd = tempIndexStart + 7;

  let tempDays: Date[] = generateDays(tempIndexStart, tempIndexEnd);

  return {
    weekIndex: tempWeekIndex,
    weekStart: tempIndexStart,
    weekEnd: tempIndexEnd,
    days: tempDays,
  };
}

function generateDays(start: number, end: number): Date[] {
  const tempDays: Date[] = [];
  let startFrom = new Date();
  startFrom.setDate(startFrom.getDate() - startFrom.getDay());

  for (let i = start; i < end; i++) {
    let copyDate = new Date(startFrom);
    copyDate.setDate(startFrom.getDate() + i);
    tempDays.push(copyDate);
  }

  return tempDays;
}

export interface Week {
  weekIndex: number;
  weekStart: number;
  weekEnd: number;
  days: Date[];
}

export default useWeekday;
