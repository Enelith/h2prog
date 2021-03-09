import React, { Component } from 'react';
import AgePersonne from './AgePersonne';

class Personne_as_Class extends Component {
    // Deux manières de transmettre des informations à une classe (ancienne et nouvelle, depuis ES7)

    /*
    // Ancienne méthode : implémenter un constructeur qui prend en paramètres les props, et fait appel à la méthode super en prenant ces mêmes props en params
    //  ce qui permet d'utiliser la property "props" dans la class via "this.props"
    constructor(props) {
        super(props);
    }
    */

    // Avec la nouvelle méthode (depuis ES7), plus besoin de déclarer le constructeur, il faut "juste" précéder les props de "this."
    render() {
        return (
            <>
                <fieldset>
                    <legend>Composant "personne" (as Class) called within "app" Composant (ES6)</legend>
                    <h4>Personne : {this.props.nom}</h4>
                    <AgePersonne age={this.props.age} />
                    <div>Sexe : {this.props.sexe}</div>
                </fieldset>
            </>    
        );
    }
}

export default Personne_as_Class;