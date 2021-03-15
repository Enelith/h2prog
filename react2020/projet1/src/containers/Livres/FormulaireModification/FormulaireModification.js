import React, { Component } from 'react';
import Bouton from '../../../components/Boutons/Bouton';

class FormulaireModification extends Component {
    state = {
        titreSaisi: this.props.titre,
        auteurSaisi: this.props.auteur,
        nbPagesSaisi: this.props.nbPages
    }

    /*
    // <=> 
    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nbPagesSaisi: 0
    }

    // Va réaliser une action après le premier chargement du composant
    componentDidMount = () => {
        this.setState({
            titreSaisi: this.props.titre,
            auteurSaisi: this.props.auteur,
            nbPagesSaisi: this.props.nbPages
        });
    }
    */

    validationHandler = () => {
        this.props.modification(this.props.id, this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi);
    }

    render() {
        return (
            <>
                <td>
                    <input type="text"
                        className="form-control"
                        value={this.state.titreSaisi}
                        onChange={(event) => this.setState({ titreSaisi: event.target.value })} />
                </td>
                <td>
                    <input type="text"
                        className="form-control"
                        value={this.state.auteurSaisi}
                        onChange={(event) => this.setState({ auteurSaisi: event.target.value })} />
                </td>
                <td><input type="number"
                        className="form-control"
                        value={this.state.nbPagesSaisi}
                    onChange={(event) => this.setState({ nbPagesSaisi: event.target.value })} />
                </td>
                <td colSpan="2">
                    <Bouton typeBtn="btn-primary" buttonAction={this.validationHandler}>
                        Valider
                    </Bouton>
                </td>
            </>
        );
    }
}

export default FormulaireModification;
