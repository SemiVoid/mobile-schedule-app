export const EMPL_SET = 'EMPL_SET';
export const EMPL_CHANGE = 'EMPL_CHANGE';

export interface EmployeeType {
  id: string;
  name: string;
  department: string;
}

export interface EmplState {
  origEmplList: EmployeeType[];
  employeeList: EmployeeType[];
  changesMade: boolean;
  numberOfEmpl: number;
}

export type ListType = 'origEmplList' | 'employeeList';

export type VariableType = 'changesMade' | 'numberOfEmpl';

export interface EmplSetPayload {
  list: EmployeeType[];
  listType: ListType;
}

export interface EmplChangePayload {
  variable: VariableType;
  value: any;
}

interface EmplSetAction {
  type: typeof EMPL_SET;
  payload: EmplSetPayload;
}

interface EmplChangeAction {
  type: typeof EMPL_CHANGE;
  payload: EmplChangePayload;
}

export type EmplActionTypes = EmplSetAction | EmplChangeAction;
