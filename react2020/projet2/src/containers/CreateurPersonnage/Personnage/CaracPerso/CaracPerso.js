import React from 'react';

const caracPerso = (props) => (
    <>
        <div>
            Points restants :&nbsp;
            <span className="badge bg-success">
                {props.nbPointsDisponibles}
            </span>
        </div>
        <div>
            Force : {props.force}<br />
            Agilit&eacute; : {props.agilite}<br />
            Intelligence : {props.intelligence}
        </div>
    </>
);

export default caracPerso;
