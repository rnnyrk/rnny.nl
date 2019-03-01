import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export const Error = styled.span`
  color: ${(props) => props.theme.red};
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
`;

export const Fieldset = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  font-family: ${(props) => props.theme.font.mono};
`;

export const Input = styled.input`
  flex-basis: 100%;
  font-size: 16px;
  padding: 5px;
`;

export const Optional = styled.small`
  font-size: 12px;
  color: ${(props) => props.theme.gray.dark};
`;
