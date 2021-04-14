import PropTypes from 'prop-types';

import ThemeProvider from './ThemeContext';

function AppProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
