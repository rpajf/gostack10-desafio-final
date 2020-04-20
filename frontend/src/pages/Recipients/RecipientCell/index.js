import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { RecipientItem } from './styles';
import CellText from '~/components/CellText';
import Actions from '~/components/Actions';

export default function RecipientCell({ recipient }) {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <RecipientItem>
      <CellText>#{recipient.id}</CellText>
      <CellText>{recipient.name}</CellText>
      <CellText>
        {recipient.street_adress}, numéro {recipient.street_number},{'  '}
        {recipient.city}, {'  '} {recipient.state}, {recipient.postal_code}
      </CellText>
      <CellText>
        <button type="button" onClick={toggle}>
          ...
        </button>
        <Actions visible={visible} />
      </CellText>
    </RecipientItem>
  );
}
RecipientCell.propTypes = {
  recipient: PropTypes.string.isRequired,
};
