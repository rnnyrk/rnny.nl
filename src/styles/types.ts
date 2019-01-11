import * as i from 'types';

export interface Theme {
  black: string;
  prime: string;
}

export interface BaseStyled {
  theme?: i.Theme;
  className?: string;
}
