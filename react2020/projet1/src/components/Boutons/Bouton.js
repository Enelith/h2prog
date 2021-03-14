import React from 'react';

import classes from './Bouton.module.css';

const bouton = (props) => {
    const btnCss = `btn ${classes.button} ${props.typeBtn} ${props.css}`;

    return (
        <button
            className={btnCss}
            onClick={props.buttonAction} >
            {props.children}
        </button>
    );
};

export default bouton;
