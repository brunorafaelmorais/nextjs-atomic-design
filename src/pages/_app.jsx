import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/shared/styles/globals';
import { theme } from '@/shared/config/styles';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MyApp;
