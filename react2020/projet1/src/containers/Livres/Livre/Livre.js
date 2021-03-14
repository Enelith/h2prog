import React from 'react';

import Bouton from '../../../components/Boutons/Bouton';

const livre = (props) => (
    (
        <>
                <td>{props.titre}</td>
                <td>{props.auteur}</td>
                <td>{props.nbPages}</td>
                <td>
                    <Bouton typeBtn="btn-warning" buttonAction={() => console.log("Modifier")}>
                        Modification
                </Bouton>
                </td>
                <td>
                    <Bouton typeBtn="btn-danger" buttonAction={props.deleteHandler}>
                        Supprimer
                </Bouton>
                </td>
        </>
    )
);

export default livre;
