import React, { Component } from 'react';

import './App.css';

import TitreH1 from './components/Titres/TitreH1';
import Bouton from './components/Boutons/Bouton';

class App extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <TitreH1>Page listant les livres</TitreH1>
                    <div>Livres</div>
                    <Bouton typeBtn="btn-success" buttonAction={() => console.log("Ajout")}>
                        Ajouter
                    </Bouton>
                    <Bouton typeBtn="btn-warning" buttonAction={() => console.log("Modifier")}>
                        Modifier
                    </Bouton>
                    <Bouton typeBtn="btn-danger" buttonAction={() => console.log("Supprimer")}>
                        Supprimer
                    </Bouton>
                </div>
            </>
        );
    }
}

export default App;