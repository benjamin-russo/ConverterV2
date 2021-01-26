import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import Toggler from 'src/components/Toggler';

// ici on récupère les données depuis converter
// on essaiera toujours d'avoir un composant racine
// qui embarque les data et les fait passer aux composants enfants
// ainsi on garde au maximum des Stateless Component ou Dumb Component
import currenciesData from 'src/data/currencies';
import './style.scss';

// pour pouvoir gérer un state, il faut passer la fonction Converter en class
// cette classe étendra la classe Component de React
class Converter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // je définis le state de mon composant Converter
  //   // à chaque fois qu'on veut faire varier une valeur dans le temps
  //   // on la place dans le state du composant
  //   this.state = {
  //     open: false,
  //   };

  //   // pour relier le contexte (this) de la classe à celui de la méthode de classe (toggle)
  //   // on va devoir le lier (bind)
  //   // this.toggle = this.toggle.bind(this);
  // }

  // grâce à @babel/plugin-proposal-class-properties on peut faire des propriétés de classe
  // qui nous permettent de s'affanchir du constructor pour le state et nous évite de lier
  // les méthodes au contexte de la classe.
  // Attention: il faut bien utiliser des fonctions flêchées pour les méthodes
  state = {
    open: false,
    baseAmount: 1,
    currency: 'United States Dollar',
  }

  toggle = () => {
    const { open } = this.state;
    // NE PAS CHANGER LES VALEURS DU STATE DIRECTEMENT
    // this.state.open = !this.state.open;

    // pour changer une valeur du state, il faut TOUJOURS passer par this.setState
    // c'est une méthode qui va informer React qu'il y a eu un changement dans le state.
    // React effectuera ainsi un nouveau rendu du composant
    this.setState({
      open: !open,
    });
  }

  currenciesClick = (newCurrency) => {
    // console.log('je clique pour changer la monnaie a convertir');
    console.log(newCurrency);
    this.setState({
      currency: newCurrency,
    });
  }

  makeConversion = () => {
    const { baseAmount, currency } = this.state;

    // on va rechercher le taux de change
    const foundCurrency = currenciesData.find((element) => element.name === currency);

    // on va faire la convertion qu'on renverra
    const convertedAmount = baseAmount * foundCurrency.rate;

    return Math.round(convertedAmount * 100) / 100;
  }

  render() {
    // pour retourner le JSX de notre composant
    // la classe Component de React nous met à disposition la méthode render()
    // à chaque fois qu'une valeur du state change, la fonction render() sera réexécutée

    // on récupère les valeurs du state en le destructurant
    const { open, baseAmount, currency } = this.state;
    const convertedAmount = this.makeConversion();

    return (
      <div className="converter">
        <Header baseAmount={baseAmount} />
        {/*
          avec React on a la possibilité d'avoir, depuis les props, des
          gestionnaires d'événements. Ils s'écrivent en camelCase
          https://fr.reactjs.org/docs/handling-events.html
          https://fr.reactjs.org/docs/events.html
          ---
          pour lier (bind) le contexte d'exécution de la classe à la méthode toggle
          on peut passer par une fonction fléchée : () => this.toggle()
          une fonction flêchée ne crée pas son propre contexte d'exécution,
          elle prend le contexte courant
          ---
          On peut passer toutes sorte de valeur dans les props, y compris des fonctions
          ici on donne la fonction qui sera en charge de faire varier la valeur open du state
          et dans le composant, on viendra utiliser cette fonction quand on cliquera sur le bouton
        */}
        <Toggler onClickButton={this.toggle} />
        {/*
          on peut faire des vue conditionnelle dans le JSX
          on utilise pour cela l'opérateur && qui va tester la valeur à sa gauche
          si elle est vraie il exécutera ce qu'il y a à droite
          si elle fausse il ne fera pas la traitement des instructions à sa droite
          ---
          pour utiliser une valeur stockée dans le state, on utilise l'écriture pointée
         */}
        {open && (
          <Currencies currencies={currenciesData} onClickButton={this.currenciesClick} />
        )}
        <Amount
          value={convertedAmount}
          currency={currency}
        />
      </div>
    );
  }
}

export default Converter;
