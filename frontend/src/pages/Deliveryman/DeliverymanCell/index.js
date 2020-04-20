import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { DeliverymanItem, DelivermanActions, Avatar } from './styles';
import CellText from '~/components/CellText';

export default function DeliverymanCell({ deliveryman }) {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <DeliverymanItem>
      <CellText>#{deliveryman.id}</CellText>
      <CellText>{deliveryman.name}</CellText>
      <Avatar>
        <img
          src={
            deliveryman.avatar.url
              ? deliveryman.avatar.url
              : 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt="avatar_id"
        />
      </Avatar>

      <CellText>{deliveryman.email}</CellText>
      <CellText>
        <button type="button" onClick={toggle}>
          ...
        </button>
        <DelivermanActions visible={visible} />
      </CellText>
    </DeliverymanItem>
  );
}

DeliverymanCell.propTypes = {
  deliveryman: PropTypes.string.isRequired,
};
