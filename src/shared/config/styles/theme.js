import { darkColors } from './darkColors';
import { lightColors } from './lightColors';
import { radius } from './radius';
import { breakpoints } from './breakpoints';
import { zIndex } from './zIndex';
import { typography, fontFamilyDefault as fontFamily } from './typography';

const colorMap = {
  light: lightColors,
  dark: darkColors,
};

export const theme = (type = 'light') => ({
  fontFamily,
  typography,
  colors: colorMap[type || 'light'],
  radius,
  breakpoints,
  zIndex,
  spacing: 4,
});
