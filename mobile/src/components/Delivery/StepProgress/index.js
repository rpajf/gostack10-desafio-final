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

export default function StepProgress({ status }) {
  return (
    <Container>
      <StepBar />
      <StepBallContainer>
        <StatusContainer>
          <StepBall
            filled={
              status === 'Pendente' ||
              status === 'Retirada' ||
              status === 'Entregue'
            }
          />
          <DescriptionText>Aguardando{'\n'} retirada</DescriptionText>
        </StatusContainer>

        <StatusContainer>
          <StepBall filled={status === 'Entregue' || status === 'Retirada'} />
          <DescriptionText>Retirada</DescriptionText>
        </StatusContainer>
        <StatusContainer>
          <StepBall filled={status === 'Entregue'} />
          <DescriptionText>Entregue</DescriptionText>
        </StatusContainer>
      </StepBallContainer>
    </Container>
  );
}
StepProgress.propTypes = {
  status: PropTypes.string.isRequired,
};
