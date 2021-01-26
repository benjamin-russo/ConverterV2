import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Amount = ({ value, currency }) => {
  console.log('Amount');
  // React.createElement(Converter, null);
  return (
    <div className="amount">
      <p className="amount__value">{value}</p>
      <p className="amount__currency">{currency}</p>
    </div>
  );
};

Amount.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Amount;
