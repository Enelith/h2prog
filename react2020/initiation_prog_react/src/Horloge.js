import React, { Component } from 'react';

/* 
 * Principe : 
 * Initialiser un timer dans la méthode componentDidMount() qui va alors appeller la méthode setState() (qui elle-même va automatiquement appeller la méthode render()), 
 * créant ainsi une sorte de boucle, permettant de rafraichir l'affichage de notre Horloge.
 * 
 * Note : la fonction render() est appellée avant la méthode componentDidMount() (cf. https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
 * constructor() > render() > componentDidMount()
 */
class Horloge extends Component {
    // "state" est un attribut spécifique de la classe Component
    /*
    // On peut se passer du constructeur comme vu précédemment (dépend de la version utilisée)
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        console.log("Composant créé"); // Rendu en 1st
    }
    */

    state = {
        date: new Date(),
        compteur: 1
    }

    tick = () => {
        // ATTENTION : 
        // setState est une méthode asynchrone, on peut mettre à jour une valeur d'un state à partir d'une précédente valeur, mais on est pas sûr de l'ordre d'execution
        // => REACT indique que pour modifier une valeur d'un state à partir d'une précédente valeur, il va falloir passer par une fonction qui va modifier le state 
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
        // console.log("Composant monté"); // Rendu en 3rd
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // Au moment de détruire/démonter le composant, on veut arrêter le Timer qui a été initialisé, on utilisera donc la méthode componentWillUnmount pour se faire
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        // console.log("Composant affiché"); // Rendu en 2nd
        return (
            <>
                <h2>Horloge : {this.state.date.toLocaleTimeString()}</h2>
                <div>Compteur : {this.state.compteur}</div>
            </>
        )
    }
}

export default Horloge;