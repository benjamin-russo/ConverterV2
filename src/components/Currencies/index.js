import React from 'react';
import PropTypes from 'prop-types';

import Currency from './Currency';

import './style.scss';

const Currencies = ({ currencies }) => {
  console.log('Currencies', currencies);

  const currenciesList = currencies.map((currency) => {
    // on vient sotcker la valeur du nom de la devise
    const currencyName = currency.name;
    // on retourne un composant Currency pour chaque élément du nouveau tableau
    // attetion, il faut bien penser à rajouter la prop key pour chaque élément de cet tableau
    return <Currency key={currency.name} text={currencyName} />;
  });

  // const currenciesList = currencies.map((currency) => <Currency text={currency.name} />);
  // React.createElement(Currencies, null);
  return (
    <div className="currencies">
      <p className="currencies__title">Currencies</p>
      <ul className="currencies__list">
        {currenciesList}
      </ul>
    </div>
  );
};

Currencies.propTypes = {
  // currencies: PropTypes.array.isRequired,
  // on peu tpréciser ce qu'il y a dans le tableau
  currencies: PropTypes.arrayOf(
    // on vient décrire ce qu'il y a comme propriétés dans les objets du tableau
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // ici rate n'est pas utilisé, donc pas la peine de le valider
      // rate: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Currencies;
