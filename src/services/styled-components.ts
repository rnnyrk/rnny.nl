import * as i from 'types';
import * as styledTypes from '../../node_modules/@types/styled-components';
import * as styledComponents from '../../node_modules/styled-components/dist/styled-components.browser.cjs';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet,
  StyleSheetManager,
} = styledComponents as styledTypes.ThemedStyledComponentsModule<i.Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ServerStyleSheet, StyleSheetManager };
export default styled;
