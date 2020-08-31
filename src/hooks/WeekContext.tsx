import React, { useContext, useState, useEffect} from 'react';

// Week Context Creation
interface ContextProps {
  weekList: Week[];
  weekIndex: number;
  setWeekIndex: React.Dispatch<React.SetStateAction<number>>;
}

const WeekContext = React.createContext({} as ContextProps);

// Week Context Custom Hook Usage
export function useWeekContext() {
  return useContext(WeekContext);
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

  const value = {weekList, weekIndex, setWeekIndex};

  return (
    <WeekContext.Provider value={value}>
      {children}
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
