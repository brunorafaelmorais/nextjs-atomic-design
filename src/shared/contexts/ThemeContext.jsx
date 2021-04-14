import { createContext, useCallback, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import generateTheme from '@/shared/utils/generateTheme';
import Storage from '@/shared/infra/services/storage';

export const ThemeContext = createContext('');

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const storagedTheme = Storage.get('@app.theme');

    if (storagedTheme) return storagedTheme;

    return 'light';
  });

  const changeTheme = useCallback(type => {
    setTheme(type);
    Storage.set('@app.theme', type);
  }, []);

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
