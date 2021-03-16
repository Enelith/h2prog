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
                    <TitreH1 >Cr&eacute;ateur de personnage</TitreH1>

                    <div>Personnage</div>
                    <Armes />

                    <div className="row no-gutters">
                        <Bouton
                            typeBtn="btn-danger"
                            css="col-6"
                            buttonAction={() => console.log("R\u00e9initialiser")}>
                            R&eacute;initialiser
                        </Bouton>
                        <Bouton
                            typeBtn="btn-success"
                            css="col-6"
                            buttonAction={() => console.log("Cr\u00e9er")}>
                                Cr&eacute;er
                        </Bouton>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
