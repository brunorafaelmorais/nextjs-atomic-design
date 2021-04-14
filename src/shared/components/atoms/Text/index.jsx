import PropTypes from 'prop-types';

import typography from '@/config/typography';

import { Container } from './styles';

function Text({ variant, tag, children, ...rest }) {
  return (
    <Container as={tag} variant={variant} {...rest}>
      {children}
    </Container>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.keys(typography)),
  tag: PropTypes.string,
};

Text.defaultProps = {
  variant: 'subtitle1',
  tag: 'span',
};

export default Text;
