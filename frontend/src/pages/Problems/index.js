import React from 'react';

import { FaPlus, FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import CellText from '~/components/CellText';

import {
  Container,
  Content,
  InfoText,
  Info,
  Title,
  DeliveryCell,
  MyTable,
  PageNavigate,
} from './styles';

export default function Problems() {
  // async function handleSearchRecipient(e) {
  //   setPage(1);
  //   const response = await api.get('deliveries', {
  //     params: {
  //       product: e.target.value,
  //       page,
  //     },
  //   });
  //   setRecipients(response.data.rows);
  // }
  // useEffect(() => {
  //   loadDeliveries();
  //   eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [page]);
  return (
    <Container>
      <Title>Problemas na entrega</Title>

      <Content>
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
              <CellText>asd</CellText>
              <CellText>asd</CellText>
              <CellText>asd</CellText>

              <CellText>asd</CellText>
              <CellText>asd</CellText>
              <CellText>asd</CellText>

              <CellText className="actions">
                <button type="button">...</button>
              </CellText>
            </DeliveryCell>
          </tbody>
        </MyTable>
      </Content>
      <PageNavigate>
        <button type="button" /* onClick={handlePageBack} */>
          <FaCaretLeft size={30} color="#9999" />
        </button>
        <button type="button" /* onClick={handlePage} */>
          <FaCaretRight size={30} color="#9999" />
        </button>
      </PageNavigate>
    </Container>
  );
}
