import * as i from 'types';

export interface Theme {
  black: string;
  white: string;
  font: {
    poppins: string,
    space: string,
  };
}

export interface BaseStyled {
  theme?: i.Theme;
  className?: string;
}
