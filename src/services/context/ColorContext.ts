import { createContext } from 'react';
import * as t from 'types';

export const ColorContext = createContext<t.ColorType>('purple');
