import styled, { css } from 'styled-components';
import posed from 'react-pose';

export const Fieldset = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 35px;
`;

export const Label = styled(posed.label({
  default: {
    y: '11px',
    cursor: 'text',
  },
  focus: {
    y: '-15px',
    cursor: 'pointer',
  }
}))`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 15px;
  font-weight: 700;
  font-size: 14px;
  font-family: ${(props) => props.theme.font.mono};
  text-transform: uppercase;
`;

type InputFieldProps = {
  error: boolean;
};

export const InputField = styled.input<InputFieldProps>`
  flex-basis: 100%;
  font-size: 14px;
  padding: 15px;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.gray};
  font-family: ${(props) => props.theme.font.mono};
  transition: border-color .2s ease-in;

  &:focus {
    border-color: ${(props) => props.theme.purple.light};
  }

  ${(props) => props.error && css`
    border-color: ${(props) => props.theme.red};
  `}
`;

export const Optional = styled.small`
  font-size: 12px;
  color: ${(props) => props.theme.gray.dark};
`;

export const Textarea = styled(InputField)`
  min-height: 100px;
  max-width: 100%;
`;
