import React, { useState, useEffect } from 'react';

import { FaPlus, FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import CellText from '~/components/CellText';
import Details from '~/components/Details';
import ProblemCell from './ProblemCell';

import api from '~/services/api';

import {
  Container,
  Content,
  InfoText,
  Info,
  Title,
  MyTable,
  PageNavigate,
} from './styles';

export default function Problems() {
  const [problems, setProblem] = useState([]);
  const [page, setPage] = useState(1);
  const [showDetail, setShowDetail] = useState(false);
  const [count, setCount] = useState('');

  async function loadProblems() {
    const response = await api.get('delivery/problems');

    setProblem(response.data);
    setCount(response.data.count);
  }

  useEffect(() => {
    loadProblems();
  }, [page]);

  const handlePageNext = () => {
    if (page < count / 5) {
      setPage(+1);
    }
  };
  const handlePageBack = () => {
    if (page > 1) {
      setPage(-1);
    }
  };
  const options = [
    {
      title: 'Visualizar',
      image: Visibility,
      handleClick: async id => {
        setShowDetail(!showDetail);
        setId(id);
        const response = await api.get(`problems/${id}`);
        setProblem(response.data.rows);
      },
    },
    {
      title: 'Cancelar a encomenda',
      image: Delete,
      handleClick: async id => {
        const agree = window.confirm(
          'Tem certeza que deseja cancelar essa encomenda?'
        );
        if (agree) {
          try {
            const response = await api.put(`package/cancel/${id}`);
            toast.success(response.data.message);
            fetch();
          } catch (err) {
            console.log(err);
          }
        }
      },
    },
  ];

  return (
    <Container>
      <Title>Problemas na entrega</Title>

      <Content>
        <MyTable>
          <tbody>
            <Info>
              <InfoText>Encomenda</InfoText>
              <InfoText>Descrição</InfoText>
              <InfoText>Ações</InfoText>
            </Info>
            {problems.map(problem => (
              <ProblemCell key={problem.id} problem={problem} />
            ))}
          </tbody>
        </MyTable>
      </Content>
      <PageNavigate>
        <button type="button" onClick={handlePageBack}>
          <FaCaretLeft size={30} color="#9999" />
        </button>
        <button type="button" onClick={handlePageNext}>
          <FaCaretRight size={30} color="#9999" />
        </button>
      </PageNavigate>
    </Container>
  );
}
