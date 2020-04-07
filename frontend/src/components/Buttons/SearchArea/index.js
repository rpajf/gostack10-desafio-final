import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Container, Title, Search } from './styles';

export default function SearchArea({ ...props }) {
  return (
    <Container {...props}>
      <Title {...props} />
      <Search {...props} />
      <button type="button">
        <FaPlus size={16} color="#fff" />
        Cadasrar
      </button>
    </Container>
  );
}
