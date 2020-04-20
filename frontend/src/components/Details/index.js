/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Wrapper } from './styles';

export default function Detail({
  children,
  active,
  height,
  id,
  url,
  problems = false,
}) {
  return (
    <Container
      active={active.showDetail}
      onClick={() => active.handleShowDetail(false)}
    >
      <Wrapper height={height}>{children}</Wrapper>
    </Container>
  );
}
