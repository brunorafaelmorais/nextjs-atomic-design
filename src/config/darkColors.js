import generateColorPalette from '@/shared/utils/generateColorPalette';

export default {
  white: '#fff',
  black: '#000',
  primary: {
    ...generateColorPalette('#3880ff'),
    contrast: '#fff',
  },
  danger: {
    ...generateColorPalette('#eb445a'),
    contrast: '#fff',
  },
  success: {
    ...generateColorPalette('#2dd36f'),
    contrast: '#fff',
  },
};
