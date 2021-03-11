import React from 'react';

import './Personne.css';

/*
function personne(props) {
    return (
        <>
            <fieldset>
                <legend>Composant "personne" called within "app" Composant</legend>
                <h4>Personne : {props.nom}</h4>
                <div>Age : {props.age}</div>
                <div>Sexe : {props.sexe}</div>
            </fieldset>
        </>
    );
}
*/

// Syntaxe ESX (pour déclarer la fonction Javascript) ~ Syntaxe dispo depuis ECMAScript 6 (ES6 ~ 2015, prise en charge par toutes les versions récentes des navigateurs)
// Cf : https://fr.wikipedia.org/wiki/ECMAScript pour plus d'infos
const personne = props => {
// <=> const personne = (props) => {...}
    return (
        <>
            <fieldset>
                <legend>Composant "personne" (as function) called within "app" Composant (ES6)</legend>
                <h4 className="monTitre">Personne : {props.nom}</h4>
                <div>Age : {props.age}</div>
                <div>Sexe : {props.sexe}</div>
            </fieldset>
        </>
    );
}

export default personne;