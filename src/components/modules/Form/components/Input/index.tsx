import React, { FC, useEffect, useState, useRef } from 'react';
import { Field } from 'react-final-form';

import { Fieldset, Label, InputField, Textarea } from './styled';

const Input:FC<InputProps> = ({ label, name, type = 'input' }) => {
  const inputEl = useRef(null);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (focus) {
      inputEl.current.focus();
    }
  }, [focus]);

  return (
    <Field name={name}>
      {({ input, meta }) => (
        <Fieldset onClick={() => setFocus(true)}>
          <Label pose={focus ? 'focus' : 'default'}>{label}</Label>
          {type === 'textarea' ? (
            <Textarea
              {...input}
              as="textarea"
              ref={inputEl}
              error={meta.touched && meta.error}
              onBlur={() => setFocus(false)}
            />
          ) : (
            <InputField
              {...input}
              type="text"
              ref={inputEl}
              error={meta.touched && meta.error}
              onBlur={() => setFocus(false)}
            />
          )}
        </Fieldset>
      )}
    </Field>
  );
}

type InputProps = {
  label: string;
  name: string;
  type?: 'input' | 'textarea';
}

export default Input;
