import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ text, onClickButton }) => {
  const handleClick = (event) => {
    onClickButton(event.target.innerText);
  };
  return <li className="currency" onClick={handleClick}>{text}</li>;
};

Currency.propTypes = {
  text: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
};

export default Currency;
