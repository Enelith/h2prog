import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Site from 'containers/Site/Site';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
