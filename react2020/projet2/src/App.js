import React, { Component } from 'react';
import './App.css';

import TitreH1 from './components/Titres/TitreH1';
import Armes from './components/Armes/Armes';
import Bouton from './components/Boutons/Bouton';

class App extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <TitreH1 >Titre</TitreH1>

                    <div>Personnage</div>
                    <Armes />

                    <Bouton
                        typeBtn="btn-danger"
                        buttonAction={() => console.log("Réinitialiser")}>
                        R&eacute;initialiser
                    </Bouton>
                    <Bouton
                        typeBtn="btn-success"
                        buttonAction={() => console.log("Créer")}>
                        Cr&eacute;er
                    </Bouton>
                </div>
            </>
        );
    }
}

export default App;
