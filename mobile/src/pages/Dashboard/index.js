import React from 'react';

import { Container, DashHeader, ListDelivery, Avatar } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <DashHeader>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}
        />
      </DashHeader>
      <ListDelivery>asdsad</ListDelivery>
    </Container>
  );
}
