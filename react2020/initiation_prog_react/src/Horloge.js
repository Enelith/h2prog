import React, { Component } from 'react';

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
    }

    componentDidMount() {
        console.log("Composant mont�"); // Rendu en 3rd
    }

    render() {
        console.log("Composant affich�"); // Rendu en 2nd
        return (
            <>
                <h2>Horloge : {this.state.date.toLocaleTimeString()}</h2>
            </>
        )
    }
}

export default Horloge;