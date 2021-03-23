import React from 'react';

import classes from './Bouton.module.css';

const bouton = (props) => {
    const btnCss = `btn ${classes.button} ${props.typeBtn} ${props.css}`;

    return (
        <button
            type="button"
            className={btnCss}
            onClick={props.buttonAction}
            style={props.isSelected ? { opacity: 1 } : {opacity: 0.5}} >
            {props.children}
        </button>
    );
};

export default bouton;
