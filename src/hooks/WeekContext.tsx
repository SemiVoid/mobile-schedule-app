import React, { useState, useContext, useEffect } from 'react';

// Week Context Creation
const WeekContext = React.createContext<Week[]>([]);
const WeekPrevContext = React.createContext(() => {});
const WeekCurContext = React.createContext(() => {});
const WeekNextContext = React.createContext(() => {});

// Week Context Custom Hook Usage
export function useWeek() {
  return useContext(WeekContext);
}
export function useWeekPrev() {
  return useContext(WeekPrevContext);
}
export function useWeekCurr() {
  return useContext(WeekCurContext);
}
export function useWeekNext() {
  return useContext(WeekNextContext);
}

// Week Provider Function Component
const WeekProvider: React.FC = ({ children }) => {
  const [weekList, setWeekList] = useState<Week[]>([]);
  const [weekIndex, setWeekIndex] = useState<number>(0);

  useEffect(() => {
    let tempList: Week[] = [];
    const tempWeek: Week = generateWeek(weekIndex!);
    tempList.push(tempWeek);
    setWeekList(tempList);
  }, [weekIndex]);

  function prevWeek() {
    setWeekIndex( weekIndex - 1);
  }

  function currentWeek() {
    setWeekIndex(0);
  }

  function nextWeek() {
    setWeekIndex(weekIndex + 1);
  }

  return (
    <WeekContext.Provider value={weekList}>
      <WeekPrevContext.Provider value={prevWeek}>
        <WeekCurContext.Provider value={currentWeek}>
          <WeekNextContext.Provider value={nextWeek}>
            {children}
          </WeekNextContext.Provider>
        </WeekCurContext.Provider>
      </WeekPrevContext.Provider>
    </WeekContext.Provider>
  );
};

// Interfaces
export interface Week {
  weekIndex: number;
  weekStart: number;
  weekEnd: number;
  days: Date[];
}

// Other Functions
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
  startFrom.setHours(0);
  startFrom.setMinutes(0);
  startFrom.setSeconds(0);

  for (let i = start; i < end; i++) {
    let copyDate = new Date(startFrom);
    copyDate.setDate(startFrom.getDate() + i);
    tempDays.push(copyDate);
  }

  return tempDays;
}

export default WeekProvider;
