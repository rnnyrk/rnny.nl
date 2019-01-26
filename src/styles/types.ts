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
    sans: string,
    mono: string,
  };
}

export interface BaseStyled {
  theme?: i.Theme;
  className?: string;
}
