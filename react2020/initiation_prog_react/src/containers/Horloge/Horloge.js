import React, { Component } from 'react';

import classes from './Horloge.module.css';

/* 
 * Principe : 
 * Initialiser un timer dans la m�thode componentDidMount() qui va alors appeller la m�thode setState() (qui elle-m�me va automatiquement appeller la m�thode render()), 
 * cr�ant ainsi une sorte de boucle, permettant de rafraichir l'affichage de notre Horloge.
 * 
 * Note : la fonction render() est appell�e avant la m�thode componentDidMount() (cf. https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
 * constructor() > render() > componentDidMount()
 */
class Horloge extends Component {
    // "state" est un attribut sp�cifique de la classe Component
    /*
    // On peut se passer du constructeur comme vu pr�c�demment (d�pend de la version utilis�e)
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        console.log("Composant cr��"); // Rendu en 1st
    }
    */

    state = {
        date: new Date(),
        compteur: 1
    }

    tick = () => {
        // ATTENTION : 
        // setState est une m�thode asynchrone, on peut mettre � jour une valeur d'un state � partir d'une pr�c�dente valeur, mais on est pas s�r de l'ordre d'execution
        // => REACT indique que pour modifier une valeur d'un state � partir d'une pr�c�dente valeur, il va falloir passer par une fonction qui va modifier le state 
        /*
        this.setState({
            date: new Date(),
            compteur: this.state.compteur + 1
        });
        */
        // Solution : 
        this.setState((oldState, props) => {
            return {
                date: new Date(),
                compteur: oldState.compteur + 1
            }
        });
    }

    componentDidMount() {
        // console.log("Composant mont�"); // Rendu en 3rd
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // Au moment de d�truire/d�monter le composant, on veut arr�ter le Timer qui a �t� initialis�, on utilisera donc la m�thode componentWillUnmount pour se faire
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        // console.log("Composant affich�"); // Rendu en 2nd
        return (
            <>
                <h2 className={classes.monTitre}>Horloge : {this.state.date.toLocaleTimeString()}</h2>
                <div>Compteur : {this.state.compteur}</div>
            </>
        )
    }
}

export default Horloge;