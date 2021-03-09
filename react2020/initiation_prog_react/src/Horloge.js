import React, { Component } from 'react';

class Horloge extends Component {
    // "state" est un attribut sp�cifique de la classe Component
    /*
    // On peut se passer du constructeur comme vu pr�c�demment (d�pend de la version utilis�e)
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    */

    state = {
        date: new Date(),
    }

    render() {
        return (
            <>
                <h2>Horloge : {this.state.date.toLocaleTimeString()}</h2>
            </>
        )
    }
}

export default Horloge;