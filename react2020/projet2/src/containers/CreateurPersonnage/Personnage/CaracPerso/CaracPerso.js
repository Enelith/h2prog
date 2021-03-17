import React from 'react';

import Carac from './Carac/Carac';

const caracPerso = (props) => (
    <>
        <div>
            Points restants :&nbsp;
            <span className="badge bg-success">
                {props.nbPointsDisponibles}
            </span>
        </div>
        <div>
            <Carac nbPoints={props.force} >Force</Carac>
            <Carac nbPoints={props.agilite} >Agilit&eacute;</Carac>
            <Carac nbPoints={props.intelligence} >Intelligence</Carac>
        </div>
    </>
);

export default caracPerso;
