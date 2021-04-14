import { rem, em } from 'polished';

export const fontFamilyDefault = [
  'Roboto',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

export default {
  h1: {
    font: fontFamilyDefault,
    weight: 300,
    size: rem(96),
    letterSpacing: em(-1.5),
    lineHeight: 'normal',
  },
  h2: {
    font: fontFamilyDefault,
    weight: 300,
    size: rem(60),
    letterSpacing: em(-0.5),
    lineHeight: 'normal',
  },
  h3: {
    font: fontFamilyDefault,
    weight: 400,
    size: rem(48),
    letterSpacing: em(0),
    lineHeight: 'normal',
  },
  h4: {
    font: fontFamilyDefault,
    weight: 400,
    size: rem(34),
    letterSpacing: em(0.25),
    lineHeight: 'normal',
  },
  h5: {
    font: fontFamilyDefault,
    weight: 400,
    size: rem(24),
    letterSpacing: em(0),
    lineHeight: 'normal',
  },
  h6: {
    font: fontFamilyDefault,
    weight: 500,
    size: rem(20),
    letterSpacing: em(0.15),
    lineHeight: 'normal',
  },
  subtitle1: {
    font: fontFamilyDefault,
    weight: 400,
    size: rem(16),
    letterSpacing: em(0.15),
    lineHeight: 'normal',
  },
  subtitle2: {
    font: fontFamilyDefault,
    weight: 500,
    size: rem(14),
    letterSpacing: em(0.1),
    lineHeight: 'normal',
  },
  body1: {
    font: fontFamilyDefault,
    weight: 400,
    size: rem(16),
    letterSpacing: em(0.5),
    lineHeight: 'normal',
  },
  body2: {
    font: fontFamilyDefault,
    weight: 400,
    size: rem(14),
    letterSpacing: em(0.25),
    lineHeight: 'normal',
  },
};
