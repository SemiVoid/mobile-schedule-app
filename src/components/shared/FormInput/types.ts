import { fieldType } from '../../../redux';

type inputType =
  | 'number'
  | 'text'
  | 'email'
  | 'password'
  | 'time'
  | 'date'
  | 'search'
  | 'tel'
  | 'url'
  | 'week'
  | 'month'
  | 'datetime-local';

export interface FormInputProps {
  text: string;
  value: string;
  type?: inputType;
  required?: boolean;
  placeholder?: string;
  field: fieldType;
}
