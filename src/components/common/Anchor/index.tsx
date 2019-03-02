import styled from 'styled-components';

const Anchor = styled.a.attrs(({ href }) => ({
  target: '_blank',
  rel: 'noopener noreferrer',
  href,
}))`
  text-decoration: none;
  color: inherit;
`;

export default Anchor;
