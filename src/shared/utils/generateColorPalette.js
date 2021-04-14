import { lighten, darken } from 'polished';

export function generateColorPalette(color, amount = 0.1) {
  return {
    main: color,
    light: lighten(amount, color),
    dark: darken(amount, color),
  };
}
