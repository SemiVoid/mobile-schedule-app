import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fieldType, userInput } from '../redux';

const useIonInput = (
  inputField: fieldType,
  initialValue = ''
): [{ value: string; onIonChange: (e: any) => void }, () => void, string] => {
  const [inputValue, setInputValue] = useState(initialValue);
  const dispatch = useDispatch();

  const inputBind = {
    value: inputValue,
    onIonChange: (e: any) => {
      setInputValue(e.detail.value as string);
    },
  };

  const inputSendData = () => {
    dispatch(
      userInput({
        field: inputField,
        value: inputValue,
      })
    );
  };
  return [inputBind, inputSendData, inputValue];
};

export default useIonInput;
