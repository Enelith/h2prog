import React, { Component } from 'react';

import './App.css';

import TitreH1 from './components/Titres/TitreH1';

class App extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <TitreH1>Page listant les livres</TitreH1>
                    <div>Livres</div>
                    <button>Ajouter</button>
                </div>
            </>
        );
    }
}

export default App;