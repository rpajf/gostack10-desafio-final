import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { ProblemItem, ProblemActions } from './styles';
import CellText from '~/components/CellText';

export default function ProblemCell({ problem }) {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <ProblemItem>
      <CellText>#{problem.delivery_id}</CellText>
      <CellText>{problem.description}</CellText>

      <CellText>
        <button type="button" onClick={toggle}>
          ...
        </button>
        <ProblemActions visible={visible} />
      </CellText>
    </ProblemItem>
  );
}

ProblemCell.propTypes = {
  problem: PropTypes.string.isRequired,
};
