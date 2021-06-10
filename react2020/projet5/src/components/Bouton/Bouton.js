import React from 'react';

const Bouton = (props) => (
    <>
        <button className="btn btn-outline-secondary"
            onClick={props.clic}
        >
            {props.children}
        </button>
    </>
);

export default Bouton;
