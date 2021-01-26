import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Button = ({ toggle }) => {
  console.log('Toggle');
  // React.createElement(Converter, null);
  return (
    <button type="button" onClick={toggle}>Toggle</button>
  );
};

Button.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default Button;
