import React, { useState, useEffect } from 'react';

import { FaPlus, FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import history from '~/services/history';
import SearchInput from '~/components/Buttons/SearchInput';
import CellText from '~/components/CellText';

import {
  Container,
  Content,
  Search,
  InfoText,
  Info,
  DeliveryCell,
  Title,
  StatusDiv,
  PageNavigate,
} from './styles';
import api from '~/services/api';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState('');

  async function loadDeliveries() {
    const response = await api.get('deliveries', {
      params: {
        page,
        product: '',
      },
    });

    setCount(response.data.count);
    setDeliveries(response.data.rows);
  }

  async function handleSearchDelivery(e) {
    setPage(1);
    const response = await api.get('deliveries', {
      params: {
        product: e.target.value,
        page,
      },
    });
    setDeliveries(response.data.rows);
  }
  useEffect(() => {
    loadDeliveries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handlePage() {
    if (page < count / 5) {
      setPage(page + 1);
    }
  }
  function handlePageBack() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  function handleNavigate() {
    history.push('/form');
  }
  return (
    <Container>
      <Content>
        <Title>Gerenciando encomendas</Title>

        <Search>
          <SearchInput
            onChange={handleSearchDelivery}
            type="text"
            placeholder="Buscar por encomendas"
          />
          <button type="button" onClick={handleNavigate}>
            <FaPlus size={16} color="#fff" />
            cadastrar
          </button>
        </Search>
        <Info>
          <InfoText>ID</InfoText>
          <InfoText>Destinatário</InfoText>
          <InfoText>Entregador</InfoText>
          <InfoText>Cidade</InfoText>
          <InfoText>Estado</InfoText>
          <InfoText>Status</InfoText>
          <InfoText>Ações</InfoText>
        </Info>
        {deliveries.map(delivery => (
          <DeliveryCell>
            <CellText key={delivery.id}>#{delivery.id}</CellText>
            <CellText>{delivery.Recipient.name}</CellText>
            <CellText>{delivery.Deliveryman.name}</CellText>

            <CellText>{delivery.Recipient.state}</CellText>
            <CellText>{delivery.Recipient.city}</CellText>
            <CellText>{delivery.status}</CellText>

            <CellText className="actions">
              <button type="button">...</button>
            </CellText>
          </DeliveryCell>
        ))}
      </Content>
      <PageNavigate>
        <button type="button" onClick={handlePageBack}>
          <FaCaretLeft size={30} color="#9999" />
        </button>
        <button type="button" onClick={handlePage}>
          <FaCaretRight size={30} color="#9999" />
        </button>
      </PageNavigate>
    </Container>
  );
}
