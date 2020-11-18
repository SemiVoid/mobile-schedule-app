import { IonInput, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { userInput } from '../../../redux';
import { FormInputProps } from './types';

const FormInput: React.FC<FormInputProps> = ({
  text,
  value,
  type = 'text',
  required,
  placeholder,
  field,
}) => {
  const dispatch = useDispatch();
  return (
    <IonItem>
      <IonLabel>{text}</IonLabel>
      <IonInput
        value={value}
        type={type}
        required={required}
        placeholder={placeholder}
        onIonChange={(e) =>
          dispatch(
            userInput({
              field: field,
              value: e.detail.value as string,
            })
          )
        }
      />
    </IonItem>
  );
};

export default FormInput;
