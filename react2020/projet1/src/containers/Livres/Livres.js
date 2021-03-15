import React, { Component } from 'react';

/*
import classes from './Livres.module.css';
*/

import Livre from './Livre/Livre';
import FormulaireAjout from './FormulaireAjout/FormulaireAjout';
import FormulaireModification from './FormulaireModification/FormulaireModification';

import Alert from '../../components/Alert/Alert';

class Livres extends Component {
    state = {
        livres: [
            { id: 1, titre: "Bouquin 1", auteur: "Alpha", nbPages: 200 },
            { id: 2, titre: "Bouquin 2", auteur: "Beta", nbPages: 52 },
            { id: 3, titre: "Bouquin 3", auteur: "Gamma", nbPages: 353 },
            { id: 4, titre: "Bouquin 4", auteur: "Kappa", nbPages: 120 },
        ],
        lastIdLivre: 4,
        idLivreAModifier: 0,
        alertMessage: null
    }

    deleteLivreHandler = (idLivre) => {
        const livreIndex = this.state.livres.findIndex(livre => {
            return livre.id === idLivre;
        });

        const newLivres = [...this.state.livres]; //this.state.livres.slice();
        newLivres.splice(livreIndex, 1);

        this.setState({
            livres: newLivres,
            alertMessage: {
                message: "Suppression effectu\u00e9e",
                type: "alert-danger"
            }
        });
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
                lastIdLivre: oldState.lastIdLivre + 1,
                alertMessage: {
                    message: "Ajout effectu\u00e9",
                    type: "alert-success"
                }
            }
        });

        this.props.fermerAjoutLivre();
    }

    modificationLivreHandler = (id, titre, auteur, nbPages) => {
        const indexLivre = this.state.livres.findIndex(livre => {
            return livre.id === id;
        });

        const newLivre = { id, titre, auteur, nbPages };
        /*
        // <=> Parce que les noms des parametres de variable sont les mêmes que les noms des champs de l'objet généré (ici, livre)
        const newLivre = {
            id: id,
            titre: titre,
            auteur: auteur,
            nbPages: nbPages
        }
        */

        const newListe = [...this.state.livres];
        newListe[indexLivre] = newLivre;

        this.setState({
            livres: newListe,
            idLivreAModifier: 0,
            alertMessage: {
                message: "Modification effectu\u00e9e",
                type: "alert-warning"
            }
        });
    }

    render() {
        return (
            <>
                {this.state.alertMessage && <Alert typeAlert={this.state.alertMessage.type} > { this.state.alertMessage.message }</Alert>}
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
                                if (livre.id !== this.state.idLivreAModifier) {
                                    return (
                                        <tr key={livre.id}>
                                            <Livre {...livre}
                                                deleteHandler={() => this.deleteLivreHandler(livre.id)}
                                                modifyHandler={() => this.setState({ idLivreAModifier: livre.id })}
                                            />
                                        </tr>
                                    );
                                }
                                else {
                                    return (
                                        <tr key={livre.id}>
                                            <FormulaireModification {...livre} modification={this.modificationLivreHandler} />
                                        </tr>
                                    );
                                }
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
