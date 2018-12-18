import styled from 'styled-components';
import { media } from 'styles/utils';
import PT from 'prop-types';

import Title from 'common/Title';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  ${media.desktop`
    margin: 20px 0 60px;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  p {
    margin: 0 0 5px;
  }
`;

export const BioTitle = styled(Title)`
  font-size: 36px;
`;

export const Image = styled.figure`
  min-width: 75px;
  min-height: 75px;
  margin: 0 20px 0 0;
  border-radius: 50%;
  background: ${(props) => props.theme.white.off} url(${(props) => props.src});
`;

Image.propTypes = {
  src: PT.string,
};
