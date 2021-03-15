import React, { Component } from 'react';
import Bouton from '../../../components/Boutons/Bouton';

class FormulaireAjout extends Component {
    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nbPagesSaisi: ""
    }

    validationFormHandler = (event) => {
        event.preventDefault();

        this.props.validation(
            this.state.titreSaisi,
            this.state.auteurSaisi,
            this.state.nbPagesSaisi
        );

        // Reset le formulaire
        this.setState({
            titreSaisi: "",
            auteurSaisi: "",
            nbPagesSaisi: ""
        });
    }

    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{ fontFamily: 'Sigmar One' }}>Affichage du formulaire d'ajout</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="titre" className="form-label">Titre du livre</label>
                        <input type="text"
                            className="form-control"
                            id="titre"
                            value={this.state.titreSaisi}
                            onChange={(event) => this.setState({ titreSaisi: event.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="auteur" className="form-label">Auteur</label>
                        <input type="text"
                            className="form-control"
                            id="auteur"
                            value={this.state.auteurSaisi}
                            onChange={(event) => this.setState({ auteurSaisi: event.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nbPages" className="form-label">Nombre de pages</label>
                        <input type="number"
                            className="form-control"
                            id="nbPages"
                            value={this.state.nbPagesSaisi}
                            onChange={(event) => this.setState({ nbPagesSaisi: event.target.value })}
                        />
                    </div>
                    <Bouton typeBtn="btn-primary" buttonAction={this.validationFormHandler} > Valider</Bouton>
                </form>
            </>
        );
    }
}

export default FormulaireAjout;
