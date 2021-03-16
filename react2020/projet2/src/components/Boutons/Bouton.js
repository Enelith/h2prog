import React from 'react';

const bouton = (props) => {
    const btnCss = `btn ${props.typeBtn} ${props.css}`;

    return (
        <button
            type="button"
            className={btnCss}
            onClick={props.buttonAction} >
            {props.children}
        </button>
    );
};

export default bouton;
