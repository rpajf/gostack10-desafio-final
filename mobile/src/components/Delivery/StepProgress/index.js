import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  StepBar,
  StepBall,
  StepBallContainer,
  StatusContainer,
  DescriptionText,
} from './styles';

export default function StepProgress({ ...props }) {
  return (
    <Container {...props}>
      <StepBar />
      <StepBallContainer>
        <StatusContainer>
          <StepBall />
          <DescriptionText>Aguardando{'\n'} retirada</DescriptionText>
        </StatusContainer>

        <StatusContainer>
          <StepBall />
          <DescriptionText>Retirada</DescriptionText>
        </StatusContainer>
        <StatusContainer>
          <StepBall />
          <DescriptionText>Entregue</DescriptionText>
        </StatusContainer>
      </StepBallContainer>
    </Container>
  );
}
