import React, { Component } from 'react';
import AgePersonne from './AgePersonne';

class Personne_as_Class extends Component {
    // Deux mani�res de transmettre des informations � une classe (ancienne et nouvelle, depuis ES7)

    /*
    // Ancienne m�thode : impl�menter un constructeur qui prend en param�tres les props, et fait appel � la m�thode super en prenant ces m�mes props en params
    //  ce qui permet d'utiliser la property "props" dans la class via "this.props"
    constructor(props) {
        super(props);
    }
    */

    // Avec la nouvelle m�thode (depuis ES7), plus besoin de d�clarer le constructeur, il faut "juste" pr�c�der les props de "this."
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