import React from 'react';

const Bouton = (props) => (
    <>
        <button className="btn btn-outline-secondary"
            onClick={props.click}
        >
            {props.children}
        </button>
    </>
);

export default Bouton;
