import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';

import { Button, Title } from 'common';
import { Error, FormContainer, Fieldset, Label, Input, Optional, Textarea } from './styled';

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
          <Title>Get in touch</Title>

          <Field name="name">
            {({ input, meta }) => (
              <Fieldset>
                <Input type="text" {...input} placeholder="Name" />
                {meta.touched && meta.error && <Error>{meta.error}</Error>}
              </Fieldset>
            )}
          </Field>

          <Field name="email">
            {({ input, meta }) => (
              <Fieldset>
                <Input type="email" {...input} placeholder="E-mail" />
                {meta.touched && meta.error && <Error>{meta.error}</Error>}
              </Fieldset>
            )}
          </Field>

          <Field name="phone">
            {({ input, meta }) => (
              <Fieldset>
                <Textarea as="textarea" placeholder="Leave your message briefly" {...input} />
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
