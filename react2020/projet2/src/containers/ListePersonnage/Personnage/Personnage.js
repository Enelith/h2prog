import React from 'react';

import classes from './Personnage.module.css';

import ImagePlayer1 from '../../../asset/images/persos/player1.png';
import ImagePlayer2 from '../../../asset/images/persos/player2.png';
import ImagePlayer3 from '../../../asset/images/persos/player3.png';

import Arc from '../../../asset/images/armes/arc.png';
import Epee from '../../../asset/images/armes/epee.png';
import Fleau from '../../../asset/images/armes/fleau.png';
import Hache from '../../../asset/images/armes/hache.png';

const personnage = (props) => {
    let imagePlayer = null;
    let imageWeapon = null;

    switch (props.perso.image) {
        case 1:
            imagePlayer = ImagePlayer1;
            break;
        case 2:
            imagePlayer = ImagePlayer2;
            break;
        case 3:
            imagePlayer = ImagePlayer3;
            break;
        default:
            break;
    }

    switch (props.perso.arme) {
        case "arc":
            imageWeapon = Arc;
            break;
        case "epee":
            imageWeapon = Epee;
            break;
        case "fleau":
            imageWeapon = Fleau;
            break;
        case "hache":
            imageWeapon= Hache;
            break;
        default:
            break;
    }

    return (
        <>
            <fieldset>
                <legend>{props.nom}</legend>
                <div className="row no-gutters">
                    <div className="col-6">
                        <img src={imagePlayer} alt={props.perso.image} />
                    </div>
                    <div className="col-6">
                        Force : {props.perso.force} <br />
                        Agilit&eacute; : {props.perso.agilite} <br />
                        Intelligence : {props.perso.intelligence} <br />

                        <img src={imageWeapon} alt={props.perso.arme} />
                    </div>
                </div>
            </fieldset>
        </>
    );
};

export default personnage;
