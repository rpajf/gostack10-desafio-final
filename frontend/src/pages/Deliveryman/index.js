import React, { useState, useEffect } from 'react';

import { FaPlus, FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import SearchInput from '~/components/Buttons/SearchInput';
import CellText from '~/components/CellText';
import history from '~/services/history';
import api from '~/services/api';
import DeliverymanCell from './DeliverymanCell';
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

export default function Deliveryman() {
  const [courriers, setDeliveryman] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState('');
  const [filter, setFilter] = useState('');

  async function loadDeliveryman() {
    const response = await api.get(`deliveryman?page=${page}&name=${filter}`);

    setDeliveryman(response.data);
    setCount(response.data);
  }

  useEffect(() => {
    loadDeliveryman();
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
        <Title>Gerenciando entregadores</Title>

        <Search>
          <SearchInput
            type="text"
            placeholder="Buscar por destinatario"
            onChange={e => setFilter(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => handleRedirect('/deliveryman/form')}
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
              <InfoText>Foto</InfoText>
              <InfoText>Email</InfoText>
              <InfoText>Ações</InfoText>
            </Info>
            {courriers
              ? courriers.map(deliveryman => (
                  <DeliverymanCell
                    key={deliveryman.id}
                    deliveryman={deliveryman}
                  />
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
