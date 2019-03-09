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
    y: '-20px',
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
  outline: none;
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

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border-bottom: 1px solid ${(props) => props.theme.gray};
    -webkit-box-shadow: 0 0 0px 1000px ${(props) => props.theme.white} inset;
  }
`;

export const Optional = styled.small`
  font-size: 12px;
  color: ${(props) => props.theme.gray.dark};
`;

export const Textarea = styled(InputField)`
  min-height: 100px;
  max-width: 100%;
`;
