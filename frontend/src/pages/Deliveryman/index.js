import React from 'react';

import { FaPlus, FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import SearchInput from '~/components/Buttons/SearchInput';
import Cell from '~/components/Cell';

import {
  Container,
  Content,
  Search,
  InfoText,
  Info,
  Title,
  Text,
  PageNavigate,
} from './styles';

export default function Recipients() {
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
      <Title>Gerenciando Destinatários</Title>

      <Search>
        <SearchInput
          // onChange={handleSearchRecipient}
          type="text"
          placeholder="Buscar por destinatários"
        />
        <button type="button">
          <FaPlus size={16} color="#fff" />
          Cadasrar
        </button>
      </Search>
      <Info>
        <InfoText>ID</InfoText>
        <InfoText>Nome</InfoText>
        <InfoText>Endereço</InfoText>
        <InfoText>Ações</InfoText>
      </Info>

      <Content>
        <Cell>
          <Text>1</Text>
          <Text>foto</Text>
          <Text>rapa</Text>

          <Text>
            <button type="button">...</button>
          </Text>
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
