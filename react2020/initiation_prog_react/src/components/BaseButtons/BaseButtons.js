import React, { Component } from 'react';

import classes from './BaseButtons.module.css';

class BaseButtons extends Component {

    wrongWay() {
        console.log(this); // this = undefined
    }

    rightWay = () => {
        console.log(this); // this = Accès à l'application
    }

    rightWay2() {
        console.log(this); // this = Accès à l'application (cf. appel méthode fléchée sur le bouton directement)
    }

    passArgs(prenom) {
        alert("Bonjour " + prenom);
        console.log(this); // this = Accès à l'application (cf. appel méthode fléchée sur le bouton directement)
    }

    retrieveEvent(event) {
        console.log(event);
        console.log(event.target);
    }

    // Lorsqu'on utilise le .bind, le "this" represente la classe courante (ici BaseButton)
    render() {
        return (
            <>
                <hr />
                <fieldset className={classes.baseStyle}>
                    <legend><h3>Les bases des buttons</h3></legend>
                    <fieldset>
                        <legend>Button, et appel &agrave; this</legend>
                        <button onClick={this.wrongWay}>Why you must use fonction fl&eacute;ch&eacute;es</button>
                        <br />
                        <button onClick={this.rightWay}>Correct use of fonction fl&eacute;ch&eacute;es</button>
                        <br />
                        <button onClick={() => this.rightWay2()}>Another correct use of fonction fl&eacute;ch&eacute;es</button>
                    </fieldset>

                    <fieldset>
                        <legend>Button, et passer des arguments</legend>
                        <button onClick={() => this.passArgs("Jonathan")}>Avec argument : Bonjour Jonathan</button>
                        <br />
                        <button onClick={this.passArgs.bind(this, "Catherine")}>Utilisation de .bind : Bonjour Catherine</button>
                    </fieldset>

                    <fieldset>
                        <legend>Button : r&eacute;cup&eacute;rer l'event de click</legend>
                        <button onClick={(event) => this.retrieveEvent(event)}>Retrieve l'event du blick button</button>
                    </fieldset>
                </fieldset>
            </>
        );
    }
}

export default BaseButtons;