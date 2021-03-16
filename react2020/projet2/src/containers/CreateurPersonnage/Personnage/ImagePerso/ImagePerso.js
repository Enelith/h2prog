import React from 'react';

import classes from './ImagePerso.module.css';

import ImagePlayer1 from '../../../../asset/images/persos/player1.png';
import ImagePlayer2 from '../../../../asset/images/persos/player2.png';
import ImagePlayer3 from '../../../../asset/images/persos/player3.png';

const imagePerso = (props) => {
    let imageToDisplay = "";
    if (props.numImage === 1) {
        imageToDisplay = ImagePlayer1;
    }
    else if (props.numImage === 2) {
        imageToDisplay = ImagePlayer2;
    }
    else {
        imageToDisplay = ImagePlayer3;
    }

    return (
        <div className="row no-gutters text-center align-items-center">
            <div className={["col-1", classes.fleche, classes.gauche].join(' ')}>
            </div>
            <div className="col">
                <img src={imageToDisplay} alt='' />
            </div>
            <div className={["col-1", classes.fleche, classes.droite].join(' ')}>
            </div>
        </div>
    );
};

export default imagePerso;
