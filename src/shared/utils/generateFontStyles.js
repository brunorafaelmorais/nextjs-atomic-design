import { css } from 'styled-components';

export default function generateFontStyles(typographyData) {
  return Object.entries(typographyData).reduce((accumulator, currentValue) => {
    const [key, props] = currentValue;
    const { font, weight, size, letterSpacing, lineHeight } = props;

    return {
      ...accumulator,
      [key]: css`
        font-family: ${font};
        font-size: ${size};
        font-weight: ${weight};
        letter-spacing: ${letterSpacing};
        line-height: ${lineHeight};
      `,
    };
  }, {});
}
