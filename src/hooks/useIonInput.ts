import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fieldType, userInput } from '../redux';

const useIonInput = (
  inputField: fieldType | undefined,
  initialValue: string = ''
): [
  string,
  {
    value: string | undefined;
    onIonChange: (e: any) => void;
  },
  () => void,
  () => void
] => {
  const [inputValue, setInputValue] = useState(initialValue);
  const dispatch = useDispatch();

  const inputBind = {
    value: inputValue,
    onIonChange: (e: any) => {
      setInputValue(e.detail.value as string);
    },
  };

  const inputReset = () => {
    setInputValue(initialValue);
  };

  const inputSendData = () => {
    if (inputField && inputValue) {
      dispatch(
        userInput({
          field: inputField,
          value: inputValue,
        })
      );
    }
  };

  return [inputValue, inputBind, inputSendData, inputReset];
};

export default useIonInput;
