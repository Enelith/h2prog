import React from 'react';

/*
// A utiliser si on a besoin de faire des actions avant de renvoyer le rendu (ex : placer du JS, logique, ...)
const titreH1 = (props) => {
    // Placer du JS ici si besoin

    // Resultat final incluant le JS
    return (
        
    );
};
*/

const titreH1 = (props) => (
    <h1 className="border border-dark p-2 mt-2 text-white text-center bg-primary rounded">{props.children}</h1>
);

export default titreH1;
