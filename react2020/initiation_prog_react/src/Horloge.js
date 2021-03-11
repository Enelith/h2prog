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
    }

    componentDidMount() {
        console.log("Composant monté"); // Rendu en 3rd
    }

    render() {
        console.log("Composant affiché"); // Rendu en 2nd
        return (
            <>
                <h2>Horloge : {this.state.date.toLocaleTimeString()}</h2>
            </>
        )
    }
}

export default Horloge;