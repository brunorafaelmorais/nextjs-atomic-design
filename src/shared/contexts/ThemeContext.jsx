import { createContext, useCallback } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import generateTheme from '@/shared/utils/generateTheme';
import usePersistedState from '../hooks/usePersistedState';

export const ThemeContext = createContext('');

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = usePersistedState('@app.theme', 'light');

  const changeTheme = useCallback(type => setTheme(type), [setTheme]);

  const themeType = () => generateTheme(theme);

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      <StyledThemeProvider theme={themeType}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
