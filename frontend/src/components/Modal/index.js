import React from 'react';

import { MdDeleteForever } from 'react-icons/md';
import { IoMdEye } from 'react-icons/io';
import { FaPen } from 'react-icons/fa';

import { Container, ButtonsLine } from './styles';

export default function Modal({ ...props }) {
  return (
    <Container {...props}>
      <ButtonsLine onClick={() => {}}>
        <IoMdEye size={10} color="#8E5BE8" />
        <button type="button" onClick={() => {}}>
          Vizualizar
        </button>
      </ButtonsLine>
      <ButtonsLine>
        <FaPen size={10} color="#4D85EE" />
        <button type="button" onClick={() => {}}>
          Editar
        </button>
      </ButtonsLine>
      <ButtonsLine>
        <MdDeleteForever size={10} color="#DE3B3B" />
        <button type="button" onClick={() => {}}>
          Deletar
        </button>
      </ButtonsLine>
    </Container>
  );
}
