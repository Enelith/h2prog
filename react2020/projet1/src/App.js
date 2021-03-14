import React, { Component } from 'react';

import './App.css';

import TitreH1 from './components/Titres/TitreH1';
import Bouton from './components/Boutons/Bouton';
import Livres from './containers/Livres/Livres';

class App extends Component {
    state = {
        ajoutLivre: false
    }

    clickAjoutLivreHandler = () => {
        this.setState((oldState, props) => {
            return {
                ajoutLivre: !oldState.ajoutLivre
            }
        });
    }

    render() {
        return (
            <>
                <div className="container">
                    <TitreH1>Page listant les livres</TitreH1>
                    <Livres ajoutLivre={this.state.ajoutLivre} />
                    <Bouton typeBtn="btn-success" css="w-100" buttonAction={this.clickAjoutLivreHandler}>
                        {!this.state.ajoutLivre ? "Ajouter" : "Fermer l'ajout"}
                    </Bouton>
                </div>
            </>
        );
    }
}

export default App;