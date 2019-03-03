import React from 'react';
import { Form as FinalForm } from 'react-final-form';

import validate from './validate';
import { Title } from 'common';
import Input from './components/Input';
import { FormContainer, SubmitButton } from './styled';

const Form = () => {
  const onSubmit = (values) => {
    console.log('submit', values);
  }

  return (
    <FinalForm
      onSubmit={onSubmit}
      validate={values => validate(values)}
      render={({ handleSubmit, pristine, invalid }) => (
        <FormContainer onSubmit={handleSubmit}>
          <Title>Get in touch</Title>

          <Input name="name" label="Name" />
          <Input name="email" label="E-mail" />
          <Input name="message" label="Leave your message briefly" type="textarea" />

          <SubmitButton type="submit" disabled={pristine || invalid}>
            Send
          </SubmitButton>
        </FormContainer>
      )}
    />
  );
};

export default Form;
