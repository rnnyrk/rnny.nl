import styled from 'styled-components';

export const Error = styled.span`
  color: ${(props) => props.theme.red};
`;

export const Fieldset = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  font-family: ${(props) => props.theme.font.mono};
`;

export const InputField = styled.input`
  flex-basis: 100%;
  font-size: 14px;
  padding: 15px;
  border: 1px solid ${(props) => props.theme.gray};
  font-family: ${(props) => props.theme.font.mono};
`;

export const Optional = styled.small`
  font-size: 12px;
  color: ${(props) => props.theme.gray.dark};
`;

export const Textarea = styled(InputField)`
  min-height: 100px;
`;
