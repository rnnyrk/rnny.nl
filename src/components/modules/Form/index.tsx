import React from 'react';
import { Form as FinalForm } from 'react-final-form';

import validate from 'services/fieldValidation';
import { Title } from 'common';
import Input from './components/Input';
import { FormContainer, FormHeader, SubmitButton } from './styled';

const Form = () => {
  const onSubmit = (values: FormValues) => {
    console.log('values', values);
  }

  return (
    <FinalForm
      onSubmit={onSubmit}
      validate={values => validate(values)}
      render={({ handleSubmit, pristine, invalid }) => (
        <FormContainer onSubmit={handleSubmit}>
          <FormHeader>
            <Title as="h2">Get in touch</Title>
            <p>Intersted in working together, or just want to talk?</p>
          </FormHeader>

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

type FormValues = {
  name: string;
  email: string;
  message: string;
}

export default Form;
