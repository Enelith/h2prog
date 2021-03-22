import React from 'react';

const pays = (props) => (
    <div className="row no-gutters border m-2">
        <div className="col-4">
            <img src={props.drapeau} width="100%" className="p-2" alt={props.nom} />
        </div>
        <div className="col">
            <h4>Nom : {props.nomFr}</h4>
            <div>Code pays : {props.code}</div>
            <div>Capitale : {props.capitale}</div>
            <div>R&eacute;gion : {props.region}</div>
        </div>
    </div>
);

export default pays;
