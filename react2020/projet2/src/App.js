import React, { Component } from 'react';
import './App.css';

import CreateurPersonnage from './containers/CreateurPersonnage/CreateurPersonnage';
import ListePersonnage from './containers/ListePersonnage/ListePersonnage';

class App extends Component {
    render() {
        return (
            <>
                <CreateurPersonnage />
                <ListePersonnage />
            </>
        );
    }
}

export default App;
