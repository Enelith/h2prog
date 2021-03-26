import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Site from './containers/Site/Site';

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter >
                    <Site />
                </BrowserRouter>
            </>
        );
    }
}

export default App;
