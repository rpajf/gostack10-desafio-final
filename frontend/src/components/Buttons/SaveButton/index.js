import React from 'react';

import { Save } from './styles';

export default function Savebutton({ ...props }) {
  return (
    <Save {...props} type="button">
      Salvar
    </Save>
  );
}
