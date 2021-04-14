import zIndex from '@/config/zIndex';
import lightColors from '@/config/lightColors';
import darkColors from '@/config/darkColors';
import radius from '@/config/radius';
import breakpoints from '@/config/breakpoints';
import typography, {
  fontFamilyDefault as fontFamily,
} from '@/config/typography';

const colorMap = {
  light: lightColors,
  dark: darkColors,
};

export default function generateTheme(type) {
  return {
    fontFamily,
    typography,
    colors: colorMap[type],
    radius,
    breakpoints,
    zIndex,
    spacing: 4,
  };
}
