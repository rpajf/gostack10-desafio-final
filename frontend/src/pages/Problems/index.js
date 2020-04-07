import React from 'react';

import { FaPlus, FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import SearchInput from '~/components/Buttons/SearchInput';
import Cell from '~/components/Cell';
import {
  Container,
  Content,
  InfoText,
  Info,
  Title,
  CellText,
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

      <Info>
        <InfoText>Encomenda</InfoText>
        <InfoText>Problema</InfoText>
        <InfoText>Ações</InfoText>
      </Info>

      <Content>
        <Cell>
          <CellText>1</CellText>
          <CellText>foto</CellText>
          <CellText>rapa</CellText>

          <CellText>
            <button type="button">...</button>
          </CellText>
        </Cell>
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
