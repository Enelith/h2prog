import React, { Component } from 'react';
import './App.css';

import CreateurPersonnage from './containers/CreateurPersonnage/CreateurPersonnage';
import ListePersonnage from './containers/ListePersonnage/ListePersonnage';

class App extends Component {
    state = {
        refresh: false
    }

    refreshHandler = () => {
        this.setState((oldState, oldProps) => {
            return { refresh: !oldState.refresh }
        });
    }

    render() {
        return (
            <>
                <CreateurPersonnage refresh={this.refreshHandler} />
                <ListePersonnage refresh={this.state.refresh} />
            </>
        );
    }
}

export default App;
