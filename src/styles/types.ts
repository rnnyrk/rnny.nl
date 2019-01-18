import * as i from 'types';

export interface Theme {
  black: string;
  white: string;
}

export interface BaseStyled {
  theme?: i.Theme;
  className?: string;
}
