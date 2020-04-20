import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { DeliveryItem, StatusBall, StatusSpan, Status } from './styles';
import CellText from '~/components/CellText';
import Modal from '~/components/Modal';
import Detail from '~/components/Details';

export default function DeliveryCell({ delivery }) {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <DeliveryItem>
      <CellText>#{delivery.id}</CellText>
      <CellText>{delivery.Recipient.name}</CellText>
      <CellText>{delivery.Deliveryman.name}</CellText>

      <CellText>{delivery.Recipient.state}</CellText>
      <CellText>{delivery.Recipient.city}</CellText>

      <Status status={delivery.status}>
        <StatusBall status={delivery.status} />
        <StatusSpan status={delivery.status}>{delivery.status}</StatusSpan>
      </Status>

      <CellText>
        <button type="button" onClick={toggle}>
          ...
        </button>
        <Modal visible={visible} />
      </CellText>
    </DeliveryItem>
  );
}

DeliveryCell.propTypes = {
  delivery: PropTypes.string.isRequired,
};
