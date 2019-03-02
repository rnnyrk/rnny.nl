import React, { FC } from 'react';
import { Field } from 'react-final-form';

import { Error, Fieldset, Label, InputField, Textarea } from './styled';

const Input:FC<InputProps> = ({ label, name, type = 'input' }) => (
  <Field name={name}>
    {({ input, meta }) => (
      <Fieldset>
        <Label>{label}</Label>
        {type === 'input'
          ? <InputField type="text" {...input} />
          : <Textarea as="textarea" {...input} />}

        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Fieldset>
    )}
  </Field>
);

type InputProps = {
  label: string;
  name: string;
  type?: 'input' | 'textarea';
}

export default Input;
