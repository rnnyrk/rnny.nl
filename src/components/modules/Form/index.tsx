import React, { useState } from 'react';
import { Form as FinalForm } from 'react-final-form';

import api from 'services/api';
import validate from 'services/fieldValidation';
import { Title } from 'common';
import Input from './components/Input';
import { FormContainer, FormHeader, SubmitButton } from './styled';

const Form = () => {
  const [sended, setSended] = useState(false);

  const onSubmit = (body: FormValues) => {
    api.post({ path: '/mail', body })
      .then(() => {
        setSended(true);
      });
  }

  return (
    <FinalForm
      onSubmit={onSubmit}
      validate={values => validate(values)}
      render={({ handleSubmit, pristine, invalid }) => (
        <FormContainer onSubmit={handleSubmit}>
          {sended ? (
            <FormHeader>
              <Title as="h2">Thanks for getting in touch!</Title>
              <p>I will get back to you as soon as possible.</p>
            </FormHeader>
          ) : (
            <>
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
            </>
          )}
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
