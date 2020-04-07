import React from 'react';

import { Container } from './styles';

export default function Cell({ ...props }) {
  return <Container {...props} />;
}
