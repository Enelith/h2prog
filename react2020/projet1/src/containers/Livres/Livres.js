import React, { Component } from 'react';

import Livre from './Livre/Livre';
/*
import classes from './Livres.module.css';
*/

class Livres extends Component {
    state = {
        livres: [
            { id: 1, titre: "Bouquin 1", auteur: "Alpha", nbPages: 200 },
            { id: 2, titre: "Bouquin 2", auteur: "Beta", nbPages: 52 },
            { id: 3, titre: "Bouquin 3", auteur: "Gamma", nbPages: 353 },
            { id: 4, titre: "Bouquin 4", auteur: "Kappa", nbPages: 120 },
        ]
    }

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
                        {
                            this.state.livres.map(livre => {
                                return (
                                    <tr key={livre.id}>
                                        <Livre {...livre} />
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </>
        );
    }
}

export default Livres;
