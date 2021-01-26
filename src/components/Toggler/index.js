import React from 'react';
import PropTypes from 'prop-types';

const Toggler = ({ onClickButton }) => {
  const handleClick = () => {
    onClickButton();
  };

  console.log('onClickButton', onClickButton);
  // ici on vient utiliser la fonction qu'on nous a passé à travers les props
  // celle-ci sera exécuter à chaque clic
  // return <button type="button" onClick={onClickButton}>Toggle</button>;
  return <button type="button" onClick={handleClick}>Toggle</button>;
};

Toggler.propTypes = {
  // on oublie pas de valider la props de type function
  onClickButton: PropTypes.func.isRequired,
};

export default Toggler;
