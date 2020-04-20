import styled from 'styled-components/native';

import Text from '~/components/Text';

export const Container = styled.View`
  align-items: center;

  justify-content: center;
  background: #b7c4e2;
  height: 120px;
  width: 120px;
  border-radius: 60px;
  align-self: center;
`;

export const TextPhoto = styled(Text)`
  font-size: 31px;
  color: #a28fd0;
  text-transform: uppercase;
`;
