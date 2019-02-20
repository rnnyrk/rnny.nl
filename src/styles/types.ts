import * as i from 'types';

export type Theme = {
  black: string;
  gray: {
    dark: string;
  };
  purple: {
    dark: string;
    light: string;
  };
  white: {
    off: string;
  };
  font: {
    sans: string,
    mono: string,
  };
}

export type BaseStyled = {
  theme?: i.Theme;
  className?: string;
}