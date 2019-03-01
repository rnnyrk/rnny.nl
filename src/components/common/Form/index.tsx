import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form'

import Button from 'common/Button';

import { Error, FormContainer, Fieldset, Label, Input, Optional } from './styled';

const Form = () => {
  const onSubmit = () => {
    console.log('submit');
  }

  return (
    <FinalForm
      onSubmit={onSubmit}
      // validate={validate}
      render={({ handleSubmit, pristine, invalid }) => (
        <FormContainer onSubmit={handleSubmit}>
          <Field name="name">
            {({ input, meta }) => (
              <Fieldset>
                <Label>Name</Label>
                <Input type="text" {...input} placeholder="Name.." />
                {meta.touched && meta.error && <Error>{meta.error}</Error>}
              </Fieldset>
            )}
          </Field>

          <Field name="email">
            {({ input, meta }) => (
              <Fieldset>
                <Label>E-mail</Label>
                <Input type="email" {...input} placeholder="E-mail.." />
                {meta.touched && meta.error && <Error>{meta.error}</Error>}
              </Fieldset>
            )}
          </Field>

          <Field name="phone">
            {({ input, meta }) => (
              <Fieldset>
                <Label>Phone <Optional>optional</Optional></Label>
                <Input type="tel" {...input} placeholder="Phone number.." />
                {meta.touched && meta.error && <Error>{meta.error}</Error>}
              </Fieldset>
            )}
          </Field>

          <Button type="submit" disabled={pristine || invalid}>
            Send
          </Button>
        </FormContainer>
      )}
    />
  );
};

export default Form;
