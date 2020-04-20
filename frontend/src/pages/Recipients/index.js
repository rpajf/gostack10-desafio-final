import React, { useState, useEffect } from 'react';

import { FaPlus, FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import SearchInput from '~/components/Buttons/SearchInput';
import RecipientCell from './RecipientCell';
import api from '~/services/api';

import history from '~/services/history';

import {
  Container,
  Content,
  Search,
  InfoText,
  Info,
  Title,
  MyTable,
  PageNavigate,
} from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState('');

  async function loadRecipients() {
    const response = await api.get('recipients', {
      params: {
        page,
        name: '',
      },
    });
    setCount(response.data.count);
    setRecipients(response.data);
  }
  useEffect(() => {
    loadRecipients();
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

  const handleRedirect = url => history.push(url);
  return (
    <Container>
      <Content>
        <Title>Gerenciando destinatários</Title>

        <Search>
          <SearchInput type="text" placeholder="Buscar por destinatários" />
          <button
            type="button"
            onClick={() => handleRedirect('/recipient/form')}
          >
            <FaPlus size={16} color="#fff" />
            cadastrar
          </button>
        </Search>
        <MyTable>
          <tbody>
            <Info>
              <InfoText>ID</InfoText>
              <InfoText>Nome</InfoText>
              <InfoText>Endereço</InfoText>
              <InfoText>Ações</InfoText>
            </Info>

            {recipients
              ? recipients.map(recipient => (
                  <RecipientCell key={recipient.id} recipient={recipient} />
                ))
              : null}
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
