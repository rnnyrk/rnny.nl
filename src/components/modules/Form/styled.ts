import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

import { Button, Title } from 'common';

export const FormHeader = styled.header`
  width: 100%;
  margin-bottom: 25px;
  padding-right: 30px;

  ${Title} {
    margin-bottom: 5px;
  }

  ${media.desktop`
    padding-right: 0;
  `}
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
