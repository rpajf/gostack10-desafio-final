import React from 'react';

import PropTypes from 'prop-types';

import { Container, Wrapper } from './styles';

export default function VisualWrapper({ active, height, children, id, url }) {
  return (
    <Container
      active={active.showModal}
      onClick={() => active.handleShowModal(false)}
    >
      <Wrapper height={height}>{children}</Wrapper>
    </Container>
  );
}

VisualWrapper.propTypes = {
  active: PropTypes.bool.isRequired,
  height: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};
