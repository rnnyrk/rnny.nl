import React, { FC, useState, useRef, useEffect } from 'react';
import { Field } from 'react-final-form';

import { Fieldset, Label, InputField, Textarea } from './styled';

const Input:FC<InputProps> = ({ label, name, type = 'input' }) => {
  const inputEl = useRef(null);
  const [focus, setFocus] = useState(false);

  const handleFocus = (event) => {
    if (!focus) {
      setFocus(true);
      event ? event.currentTarget.focus() : inputEl.current.focus();
    }
  }

  const handleBlur = (event, input) => {
    input.onBlur(event);

    if (!event.currentTarget.value) {
      setFocus(false)
    }
  }

  return (
    <Field name={name}>
      {({ input, meta }) => (
        <Fieldset onClick={handleFocus}>
          <Label pose={focus ? 'focus' : 'default'}>{label}</Label>
          {type === 'textarea' ? (
            <Textarea
              {...input}
              as="textarea"
              ref={inputEl}
              error={meta.touched && meta.error}
              onFocus={handleFocus}
              onBlur={(event) => handleBlur(event, input)}
            />
          ) : (
            <InputField
              {...input}
              type="text"
              ref={inputEl}
              error={meta.touched && meta.error}
              onFocus={handleFocus}
              onBlur={(event) => handleBlur(event, input)}
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
