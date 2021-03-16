import React from 'react';

import ImagePerso from './ImagePerso/ImagePerso';

const personnage = (props) => (
    <div className="row no-gutters">
        <div className="col-6">
            <ImagePerso numImage={props.image} />
        </div>
        <div className="col-6">
            Force: {props.force}<br />
            Agilit&eacute;: {props.agilite}<br />
            Intelligence: {props.intelligence}
        </div>
    </div>
);

export default personnage;
