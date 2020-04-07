import React from 'react';

import { Container, FormContent, FormField, Text, TextHeader } from './styles';

export default function Form({ ...props }) {
  return (
    <Container>
      <TextHeader {...props} />
      <FormContent />
    </Container>
  );
}
