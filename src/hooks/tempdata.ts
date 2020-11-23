import { v4 as uuidv4 } from 'uuid';
import { ScheduleType } from '../redux/schedule/schedTypes';

export const tempScheduleList: ScheduleType[] = [
  {
    id: uuidv4(),
    name: 'Brayden',
    date: new Date('November 23, 2020'),
    startTime: '9:30am',
    endTime: '4:00pm',
  },
  {
    id: uuidv4(),
    name: 'Jimmy',
    date: new Date('November 23, 2020'),
    startTime: '8:30am',
    endTime: '3:00pm',
  },
  {
    id: uuidv4(),
    name: 'Bobby',
    date: new Date('November 24, 2020'),
    startTime: '9:30am',
    endTime: '3:00pm',
  },
  {
    id: uuidv4(),
    name: 'Emma',
    date: new Date('November 24, 2020'),
    startTime: '9:30am',
    endTime: '3:00pm',
  },
  {
    id: uuidv4(),
    name: 'Jill',
    date: new Date('November 25, 2020'),
    startTime: '9:30am',
    endTime: '3:00pm',
  },
  {
    id: uuidv4(),
    name: 'Bob',
    date: new Date('November 25, 2020'),
    startTime: '9:30am',
    endTime: '3:00pm',
  },
  {
    id: uuidv4(),
    name: 'Sandra',
    date: new Date('November 26, 2020'),
    startTime: '9:25am',
    endTime: '3:04pm',
  },
  {
    id: uuidv4(),
    name: 'Brenda',
    date: new Date('November 26, 2020'),
    startTime: '9:25am',
    endTime: '3:04pm',
  },
  {
    id: uuidv4(),
    name: 'Elizabeth',
    date: new Date('November 27, 2020'),
    startTime: '9:25am',
    endTime: '3:04pm',
  },
  {
    id: uuidv4(),
    name: 'Beth',
    date: new Date('November 27, 2020'),
    startTime: '9:25am',
    endTime: '3:04pm',
  },
];
