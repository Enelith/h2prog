import React from 'react';

import CaracPerso from './CaracPerso/CaracPerso';
import ImagePerso from './ImagePerso/ImagePerso';

const personnage = (props) => (
    <div className="row no-gutters">
        <div className="col-6">
            <ImagePerso
                numImage={props.image}
                flecheGauche={props.precedente}
                flecheDroite={props.suivante}
            />
        </div>
        <div className="col-6">
            <CaracPerso
                nbPointsDisponibles={props.nbPointsDisponibles}
                force={props.force}
                agilite={props.agilite}
                intelligence={props.intelligence}
            />
        </div>
    </div>
);

export default personnage;
