import React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';
import { Container, TextPhoto } from './styles';

export default function NamePhoto({ name, ...props }) {
  const firstLetter = name.charAt(0);

  const lastLetter = name.slice(-1);

  return (
    <Container {...props}>
      <TextPhoto>
        {firstLetter} {lastLetter}
      </TextPhoto>
    </Container>
  );
}

NamePhoto.propTypes = {
  name: PropTypes.string.isRequired,
};
