import React, { Component } from 'react';
import AgePersonne from './AgePersonne/AgePersonne';

import classes from './PersonneAsClass.module.css';

class PersonneAsClass extends Component {
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
        const cssDynamique = {
            backgroundColor: 'lightpink',
            color: "black",
            padding: "4px"
        }
        cssDynamique.fontSize = "1.2rem";

        if (this.props.sexe) {
            cssDynamique.backgroundColor = "orange";
        }

        /*
        let affichageSexe = "Homme";
        if (!this.props.sexe) {
            affichageSexe = "Femme";
        }
        */
        let affichageSexe = this.props.sexe ? "Homme" : "Femme";

        return (
            <>
                <fieldset>
                    <legend>Composant "personne" (as Class) called within "app" Composant (ES6)</legend>
                    <h4 className={classes.monTitre + " monTitre"}>Personne : {this.props.nom}</h4>
                    {this.props.children}
                    <AgePersonne age={this.props.age} />
                    <div className={classes.monTitre + " " + classes.italic} style={cssDynamique} >
                        Sexe : {affichageSexe} (utilisation CSS dynamique via "style" ~ voir le code - WARNING : CamelCase required)
                    </div>
                    <button
                        className={classes.button}
                        onClick={ this.props.birthdayHandler } >
                        Happy birthday {this.props.nom} !
                    </button>
                    <div className="clear" />
                </fieldset>
            </>    
        );
    }
}

export default PersonneAsClass;