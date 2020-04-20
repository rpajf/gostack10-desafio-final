import React from 'react';

import { MdDeleteForever } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';

import { Container, ButtonsLine } from './styles';

export default function Actions({ ...props }) {
  return (
    <Container {...props}>
      <ButtonsLine>
        <FaPen size={10} color="#4D85EE" />
        <button type="button" onClick={() => {}}>
          Editar
        </button>
      </ButtonsLine>
      <ButtonsLine>
        <MdDeleteForever size={10} color="#DE3B3B" />
        <button type="button" onClick={() => {}}>
          Editar
        </button>
      </ButtonsLine>
    </Container>
  );
}
