export const EMPL_SET = 'EMPL_SET';

export interface EmployeeType {
  name: string;
  department: string;
}

export interface EmplState {
  employeeList: EmployeeType[];
}

export interface EmplSetPayload {
  list: EmployeeType[];
}

interface EmplSetAction {
  type: typeof EMPL_SET;
  payload: EmplSetPayload;
}

export type EmplActionTypes = EmplSetAction;
