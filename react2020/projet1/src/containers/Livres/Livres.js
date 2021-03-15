import React, { Component } from 'react';

/*
import classes from './Livres.module.css';
*/

import Livre from './Livre/Livre';
import FormulaireAjout from './FormulaireAjout/FormulaireAjout';

class Livres extends Component {
    state = {
        livres: [
            { id: 1, titre: "Bouquin 1", auteur: "Alpha", nbPages: 200 },
            { id: 2, titre: "Bouquin 2", auteur: "Beta", nbPages: 52 },
            { id: 3, titre: "Bouquin 3", auteur: "Gamma", nbPages: 353 },
            { id: 4, titre: "Bouquin 4", auteur: "Kappa", nbPages: 120 },
        ],
        lastIdLivre: 4
    }

    deleteLivreHandler = (idLivre) => {
        const livreIndex = this.state.livres.findIndex(livre => {
            return livre.id === idLivre;
        });

        const newLivres = [...this.state.livres]; //this.state.livres.slice();
        newLivres.splice(livreIndex, 1);

        this.setState({ livres: newLivres });
    }

    ajoutLivreHandler = (titre, auteur, nbPages) => {
        // Warning : validité / unicité de l'ID livre non assuré par ce process, mais vu que c'est uniquement à titre d'exemple...
        const newLivre = {
            id: this.state.lastIdLivre + 1,
            titre: titre,
            auteur: auteur,
            nbPages: nbPages
        };

        const newListeLivres = [...this.state.livres];
        newListeLivres.push(newLivre);

        /*
        // On a pas besoin des props ici, donc autant passer directement à oldState
        this.setState((oldState, props) => {
        */
        this.setState(oldState => {
            return {
                livres: newListeLivres,
                lastIdLivre: oldState.lastIdLivre + 1
            }
        });
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
                                        <Livre {...livre} deleteHandler={() => this.deleteLivreHandler(livre.id)} />
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>

                {
                    this.props.ajoutLivre && <FormulaireAjout validation={this.ajoutLivreHandler} />
                    /* <=> this.props.ajoutLivre ? <FormulaireAjout /> : null  */
                }
            </>
        );
    }
}

export default Livres;
