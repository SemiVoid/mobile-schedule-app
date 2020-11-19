import {
  EmplActionTypes,
  EmplChangePayload,
  EmplSetPayload,
  EMPL_CHANGE,
  EMPL_SET,
} from './employeeType';

export const emplSet = (list: EmplSetPayload): EmplActionTypes => {
  return {
    type: EMPL_SET,
    payload: list,
  };
};

export const emplChange = (change: EmplChangePayload): EmplActionTypes => {
  return {
    type: EMPL_CHANGE,
    payload: change,
  };
};
