import React from 'react';
import { NavLink } from 'react-router-dom';

const pays = (props) => {
    // console.log(props);
    return (
        <div className="row no-gutters border m-2">
            <div className="col-4">
                <img src={props.drapeau} width="100%" className="p-2" alt={props.nom} />
            </div>
            <div className="col">
                <h4>Nom : {props.nomFr}</h4>
                <div>Code pays : {props.code}</div>
                <div>Capitale : {props.capitale}</div>
                <div>R&eacute;gion : {props.region}</div>
                <div className="text-right px-3 py-1">
                    <NavLink to={props.match.url + "/" + props.nom} className="nav-link">Voir la fiche du pays</NavLink>
                </div>
            </div>
        </div>
    );
};

export default pays;
