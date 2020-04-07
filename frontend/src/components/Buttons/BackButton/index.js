import React from 'react';

import { Back } from './styles';

export default function BackButton({ ...props }) {
  return (
    <Back {...props} type="button">
      Voltar
    </Back>
  );
}
