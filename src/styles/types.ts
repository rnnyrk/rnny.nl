import * as i from 'types';

export interface Theme {
  black: string;
  purple: {
    dark: string;
  };
  white: {
    off: string;
  };
  font: {
    poppins: string,
    space: string,
  };
}

export interface BaseStyled {
  theme?: i.Theme;
  className?: string;
}
