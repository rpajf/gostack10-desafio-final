import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';

import { format, parseISO } from 'date-fns';

import {
  Container,
  DetailHeader,
  DeliveryDetails,
  DeliverySituation,
  DetailsHeaderText,
  HeaderView,
  DetailsText,
  DetailsBolderText,
  ActionsView,
  TextView,
  ButtonsView,
  ButtonsText,
  DateView,
  Wrapper,
} from './styles';

export default function Details({ route, navigation }) {
  const { delivery } = route.params;

  return (
    <>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Container>
        <DetailHeader />
        <Wrapper>
          <DeliveryDetails>
            <HeaderView>
              <Icon
                name="local-shipping"
                size={24}
                color="#7D40E7"
                style={{
                  marginRight: 10,
                }}
              />
              <DetailsHeaderText>Informações da entrega</DetailsHeaderText>
            </HeaderView>
            <TextView>
              <DetailsBolderText>Destinatário</DetailsBolderText>
              <DetailsText>{delivery.Recipient.name}</DetailsText>
            </TextView>

            <TextView>
              <DetailsBolderText>Endereço da entrega</DetailsBolderText>
              <DetailsText>{`${delivery.Recipient.street_adress}, ${
                delivery.Recipient.street_number
              }, ${delivery.Recipient.city} - ${delivery.Recipient.state}, ${
                delivery.Recipient.postal_code
              }`}</DetailsText>
            </TextView>
            <TextView>
              <DetailsBolderText>Produto</DetailsBolderText>
              <DetailsText>{delivery.product}</DetailsText>
            </TextView>
          </DeliveryDetails>

          <DeliverySituation>
            <HeaderView>
              <Icon name="event" color={colors.primary} size={20} />
              <DetailsHeaderText>Situação da entrega</DetailsHeaderText>
            </HeaderView>
            <TextView>
              <DetailsBolderText>Status</DetailsBolderText>
              <DetailsText>{delivery.status}</DetailsText>
            </TextView>
            <DateView>
              <TextView>
                <DetailsBolderText>Date de Retirada</DetailsBolderText>
                <DetailsText>
                  {delivery.start_date
                    ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
                    : '--/--/--'}
                </DetailsText>
              </TextView>
              <TextView>
                <DetailsBolderText>Data de entrega</DetailsBolderText>
                <DetailsText>
                  {delivery.end_date
                    ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
                    : '--/--/--'}
                </DetailsText>
              </TextView>
            </DateView>
          </DeliverySituation>
          <ActionsView>
            <ButtonsView
              onPress={() =>
                navigation.navigate('ReportProblem', {
                  deliveryId: delivery.id,
                })
              }
            >
              <Icon name="highlight-off" color={colors.warning} size={20} />
              <ButtonsText>Informar {'\n'}problema</ButtonsText>
            </ButtonsView>
            <ButtonsView
              onPress={() =>
                navigation.navigate('SeeProblems', {
                  deliveryId: delivery.id,
                  deliveryName: delivery.product,
                })
              }
            >
              <Icon name="info-outline" color="#E7BA40" size={20} />
              <ButtonsText>Visualizar {'\n'} problemas</ButtonsText>
            </ButtonsView>
            <ButtonsView
              onPress={() =>
                navigation.navigate('CompleteDelivery', {
                  deliveryId: delivery.id,
                  deliveryName: delivery.product,
                })
              }
            >
              <Icon name="check-circle" color={colors.primary} size={20} />
              <ButtonsText>Confirmar {'\n'}Entrega</ButtonsText>
            </ButtonsView>
          </ActionsView>
        </Wrapper>
      </Container>
    </>
  );
}
