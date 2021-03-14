import React, { Component } from 'react';

import Bouton from '../../components/Boutons/Bouton';

/*
import classes from './Livres.module.css';
*/

class Livres extends Component {
    render() {
        return (
            <>
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombre de pages</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>titre1</td>
                            <td>auteur1</td>
                            <td>X pages</td>
                            <td>
                                <Bouton typeBtn="btn-warning" buttonAction={() => console.log("Modifier")}>
                                    Modification
                                </Bouton>
                            </td>
                            <td>
                                <Bouton typeBtn="btn-danger" buttonAction={() => console.log("Supprimer")}>
                                    Supprimer
                                </Bouton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default Livres;
