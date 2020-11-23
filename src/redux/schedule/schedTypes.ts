export const SCHED_SET = 'SCHED_SET';
export const SCHED_CHANGE = 'SCHED_CHANGE';
export const DATE_CHANGE = 'DATE_CHANGE';
export const WEEK_UPDATE = 'WEEK_UPDATE';
export const WEEK_INDEX = 'WEEK_INDEX';

export interface ScheduleType {
  id: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
}

export interface WeekLayout {
  todaysDate: Date;
  weekList: Date[];
}

export interface SchedState {
  list: ScheduleType[];
  listTemp: ScheduleType[];
  listFiltered: ScheduleType[];
  weekIndex: number;
  weekLayout: WeekLayout;
  changesMade: boolean;
  worksToday: number;
  currentDay?: Date;
}

export type SchedListType = 'list' | 'listTemp' | 'listFiltered';

export interface SchedSetPayload {
  listType: SchedListType;
  list: ScheduleType[];
}

interface SchedSetAction {
  type: typeof SCHED_SET;
  payload: SchedSetPayload;
}

export interface SchedChangePayload {
  change: boolean;
}

interface SchedChangeAction {
  type: typeof SCHED_CHANGE;
  payload: SchedChangePayload;
}

export interface DateChangePayload {
  date: Date;
}

interface DateChangeAction {
  type: typeof DATE_CHANGE;
  payload: DateChangePayload;
}

export interface WeekUpdatePayload {
  weekLayout: WeekLayout;
}

interface WeekUpdateAction {
  type: typeof WEEK_UPDATE;
  payload: WeekUpdatePayload;
}

export interface WeekIndexPayload {
  index: number;
}

interface WeekIndexAction {
  type: typeof WEEK_INDEX;
  payload: WeekIndexPayload;
}

export type SchedActionTypes =
  | SchedSetAction
  | SchedChangeAction
  | DateChangeAction
  | WeekUpdateAction
  | WeekIndexAction;
