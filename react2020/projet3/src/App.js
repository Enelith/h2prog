import React, { Component } from 'react';
import './App.css';

import PaysManager from './containers/PaysManager/PaysManager';

class App extends Component{
    render() {
        return (
            <>
                <div className="container">
                    <PaysManager />
                </div>
            </>
        );
    }
}

export default App;
