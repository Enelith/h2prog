import React from 'react';

const personnage = (props) => (
    <div className="row no-gutters">
        <div className="col-6">Image: {props.image}</div>
        <div className="col-6">
            Force: {props.force}<br />
            Agilit&eacute;: {props.agilite}<br />
            Intelligence: {props.intelligence}
        </div>
    </div>
);

export default personnage;
