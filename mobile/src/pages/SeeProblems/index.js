import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';

import { api } from '~/services/api';
import { format, parseISO } from 'date-fns';

import {
  Container,
  Wrapper,
  ProblemHeader,
  ProblemView,
  ProductName,
  ProblemText,
  ProblemDate,
} from './styles';

export default function SeeProblems({ route }) {
  const { deliveryId, deliveryName } = route.params;
  const [problems, setProblems] = useState([]);

  async function fetchProblems() {
    const response = await api.get(`/delivery/${deliveryId}/problems`);
    setProblems(response.data);
  }

  useEffect(fetchProblems, []);

  return (
    <>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Container>
        <ProblemHeader />
        <Wrapper>
          <ProductName>{deliveryName}</ProductName>
          {problems.map(problem => (
            <ProblemView>
              <ProblemText>{problem.description}</ProblemText>
              <ProblemDate>
                {problem.created_at &&
                  format(parseISO(problem.created_at), 'dd/MM/yyyy')}
              </ProblemDate>
            </ProblemView>
          ))}
        </Wrapper>
      </Container>
    </>
  );
}
