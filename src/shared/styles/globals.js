import { createGlobalStyle } from 'styled-components';
import { normalize, fontFace } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  ${fontFace({
    fontFamily: 'Roboto',
    fontFilePath: '/static/fonts/Roboto-Light',
    fileFormats: ['woff', 'woff2'],
    fontWeight: 300,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  })};

  ${fontFace({
    fontFamily: 'Roboto',
    fontFilePath: '/static/fonts/Roboto-Regular',
    fileFormats: ['woff', 'woff2'],
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  })};

  ${fontFace({
    fontFamily: 'Roboto',
    fontFilePath: '/static/fonts/Roboto-Medium',
    fileFormats: ['woff', 'woff2'],
    fontWeight: 500,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  })};

  ${fontFace({
    fontFamily: 'Roboto',
    fontFilePath: '/static/fonts/Roboto-Bold',
    fileFormats: ['woff', 'woff2'],
    fontWeight: 700,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  })};

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
