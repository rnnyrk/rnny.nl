import React from 'react';
import { Form as FinalForm } from 'react-final-form';

import validate from './validate';
import { Button, Title } from 'common';
import Input from './components/Input';
import { FormContainer } from './styled';

const Form = () => {
  const onSubmit = () => {
    console.log('submit');
  }

  return (
    <FinalForm
      onSubmit={onSubmit}
      validate={values => validate(values)}
      validateOnBlur
      render={({ handleSubmit, pristine, invalid }) => (
        <FormContainer onSubmit={handleSubmit}>
          <Title>Get in touch</Title>

          <Input name="name" label="Name" />
          <Input name="email" label="E-mail" />
          <Input name="message" label="Leave your message briefly" type="textarea" />

          <Button type="submit" disabled={pristine || invalid}>
            Send
          </Button>
        </FormContainer>
      )}
    />
  );
};

export default Form;
