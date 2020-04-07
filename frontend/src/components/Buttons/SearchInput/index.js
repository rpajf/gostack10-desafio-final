import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function SearchInput({ ...props }) {
  return (
    <Container {...props}>
      <MdSearch size={18} color="#9999" className="icon" />
      <input {...props} />
    </Container>
  );
}
