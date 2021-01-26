import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// pour simplifier la récupération de la props, on destructure directement
// l'objet de props passé en paramètre
// il faut ensuite bien penser à valider les props passées => PropTypes
const Header = ({ baseAmount }) => {
  console.log('Header');
  // React.createElement(Converter, null);
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <p className="header__base-amount">{baseAmount} Euro</p>
    </header>
  );
};

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

export default Header;
