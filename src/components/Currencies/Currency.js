import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ text }) => (
  <li className="currency">{text}</li>
);

Currency.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Currency;
