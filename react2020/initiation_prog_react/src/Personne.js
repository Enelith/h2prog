import React from 'react';

function personne() {
    return (
        <>
            <fieldset>
                <legend>Composant "personne" called within "app" Composant</legend>
                <h4>Personne : X</h4>
                <div>Age : 31</div>
                <div>Sexe : A d&eacute;finir</div>
            </fieldset>
        </>
    );
}

export default personne;