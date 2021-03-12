import React from 'react';

import classes from './Bouton.module.css';

const bouton = (props) => {
    const btnCss = `btn ${props.typeBtn} ${classes.button}`;

    return (
        <button
            className={btnCss}
            onClick={props.buttonAction} >
            {props.children}
        </button>
    );
};

export default bouton;
