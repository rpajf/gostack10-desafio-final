import React, { useState, useEffect } from 'react';

import { FaPlus, FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import SearchInput from '~/components/Buttons/SearchInput';
import CellText from '~/components/CellText';
import api from '~/services/api';
import {
  Container,
  Content,
  Search,
  InfoText,
  Info,
  Title,
  MyTable,
  DeliveryCell,
  PageNavigate,
} from './styles';

export default function Deliveryman() {
  // const [deliveryman, setDeliveryman] = useState([]);
  // const [page, setPage] = useState(1);
  // const [count, setCount] = useState('');

  // async function loadDeliveryman() {
  //   const response = await api.get('deliveries', {
  //     params: {
  //       page,
  //       product: '',
  //     },
  //   });

  //   setCount(response.data.count);
  //   setDeliveries(response.data.rows);
  // }

  // async function handleSearchDelivery(e) {
  //   setPage(1);
  //   const response = await api.get('deliveries', {
  //     params: {
  //       product: e.target.value,
  //       page,
  //     },
  //   });
  //   setDeliveries(response.data.rows);
  // }
  // useEffect(() => {
  //   loadDeliveries();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [page]);

  // function handlePage() {
  //   if (page < count / 5) {
  //     setPage(page + 1);
  //   }
  // }
  // function handlePageBack() {
  //   if (page > 1) {
  //     setPage(page - 1);
  //   }
  // }
  // function handleNavigate() {
  //   history.push('/form');
  // }
  return (
    <Container>
      <Content>
        <Title>Gerenciando destinatários</Title>

        <Search>
          <SearchInput type="text" placeholder="Buscar por encomendas" />
          <button type="button" onClick={() => {}}>
            <FaPlus size={16} color="#fff" />
            cadastrar
          </button>
        </Search>
        <MyTable>
          <Info>
            <InfoText>ID</InfoText>
            <InfoText>Destinatário</InfoText>
            <InfoText>Entregador</InfoText>
            <InfoText>Cidade</InfoText>
            <InfoText>Estado</InfoText>
            <InfoText>Status</InfoText>
            <InfoText>Ações</InfoText>
          </Info>
          <tbody>
            <DeliveryCell>
              <CellText>01</CellText>
              <CellText>asdasd</CellText>
              <CellText>asdsad</CellText>

              <CellText>asdasda</CellText>
              <CellText>asdasd</CellText>
              <CellText>asdasdasd</CellText>

              {/* <TableData className="actions"> */}
              <CellText className="actions">
                <button type="button" onClick={() => {}}>
                  ...
                </button>
                {/* <ActionsDiv /> */}
              </CellText>
              {/* </TableData> */}
            </DeliveryCell>
          </tbody>
        </MyTable>
      </Content>
      <PageNavigate>
        <button type="button" onClick={() => {}}>
          <FaCaretLeft size={30} color="#9999" />
        </button>
        <button type="button" onClick={() => {}}>
          <FaCaretRight size={30} color="#9999" />
        </button>
      </PageNavigate>
    </Container>
  );
}
