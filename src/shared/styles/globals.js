import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
