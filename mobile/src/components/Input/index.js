import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ style, ...rest }, ref) {
  return (
    <Container style={style}>
      <TInput {...rest} ref={ref} />
      {/* the props and refs comes through this component */}
    </Container>
  );
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
Input.defaultProps = {
  style: {},
};

export default forwardRef(Input);
