import styled, { css } from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 20px 30px;
  margin-bottom: 40px;

  ${(props) => props.scrolled && css`
    position: fixed;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.white};
    box-shadow: 0 5px 10px rgba(0, 0, 0, .05);
  `}
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  font-family: 'Space Mono', monospace;
`;

export const Letter = styled.span`
  opacity: ${(props) => props.visible ? 0 : 1};
  margin: ${(props) => props.visible ? '0 -0.32em' : '0'};
  transition: opacity .2s ease-out, margin .2s ease-in-out;
`;
