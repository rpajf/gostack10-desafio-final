import React, { useState, useEffect } from 'react';

import { FaPlus, FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import history from '~/services/history';
import SearchInput from '~/components/Buttons/SearchInput';
import DeliveryCell from './DeliveryCell';
import api from '~/services/api';
import Wrapper from '~/components/Wrapper';

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

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
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
  // const options = [
  //   {
  //     title: 'Visualizar',
  //     handleClick: async id => {
  //       setShowModal(!showModal);
  //       setId(id);
  //       const response = await api.get(`package/${id}`);
  //       setList(response.data);
  //     },
  //   },
  // ];

  const handleRedirect = url => history.push(url);

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
          <button
            type="button"
            onClick={() => handleRedirect('/delivery/form')}
          >
            <FaPlus size={16} color="#fff" />
            cadastrar
          </button>
        </Search>
        <MyTable>
          <tbody>
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
              <DeliveryCell key={delivery.id} delivery={delivery} />
            ))}
            {/* <Wrapper
              active={{
                showModal,
                handleShowModal: () => {
                  setShowModal();
                },
              }}
              height={325}
              id={id}
              url="deliveries/"
            /> */}
          </tbody>
        </MyTable>
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
