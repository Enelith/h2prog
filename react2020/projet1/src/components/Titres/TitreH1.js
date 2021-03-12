import React from 'react';

import classes from './TitreH1.module.css';

// A utiliser si on a besoin de faire des actions avant de renvoyer le rendu (ex : placer du JS, logique, ...)
const titreH1 = (props) => {
    // Placer du JS ici si besoin
    const monCss = `${classes.policeTitre} border border-dark p-2 mt-2 text-center bg-primary rounded`;

    // Resultat final incluant le JS
    return (
        <h1 className={monCss}>{props.children}</h1>
    );
};

export default titreH1;
