import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

import { Button, Title } from 'common';

export const FormHeader = styled.header`
  margin-bottom: 25px;

  ${Title} {
    margin-bottom: 5px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
`;

export const SubmitButton = styled(Button)`
  &[disabled] {
    opacity: .5;
    cursor: not-allowed;
  }
`;
