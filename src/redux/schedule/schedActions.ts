import {
  DateChangePayload,
  DATE_CHANGE,
  SchedActionTypes,
  SchedChangePayload,
  SchedSetPayload,
  SCHED_CHANGE,
  SCHED_SET,
  WeekIndexPayload,
  WeekUpdatePayload,
  WEEK_INDEX,
  WEEK_UPDATE,
} from './schedTypes';

export const schedSet = (payload: SchedSetPayload): SchedActionTypes => {
  return {
    type: SCHED_SET,
    payload: payload,
  };
};

export const schedChange = (payload: SchedChangePayload): SchedActionTypes => {
  return {
    type: SCHED_CHANGE,
    payload: payload,
  };
};

export const dateChange = (payload: DateChangePayload): SchedActionTypes => {
  return {
    type: DATE_CHANGE,
    payload: payload,
  };
};

export const weekUpdate = (payload: WeekUpdatePayload): SchedActionTypes => {
  return {
    type: WEEK_UPDATE,
    payload: payload,
  };
};

export const weekIndex = (payload: WeekIndexPayload): SchedActionTypes => {
  return {
    type: WEEK_INDEX,
    payload: payload,
  };
};
