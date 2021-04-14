import styled from 'styled-components';

import generateFontStyles from '@/shared/utils/generateFontStyles';

export const Container = styled.span`
  ${({ theme, variant }) =>
    generateFontStyles(theme.typography)[variant || 'subtitle1']}
`;
