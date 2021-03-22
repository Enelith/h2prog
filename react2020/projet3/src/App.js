import React, { Component } from 'react';
import './App.css';

import PaysManager from './containers/PaysManager/PaysManager';

class App extends Component{

    componentDidMount = () => {
        console.log(
            process.env.NODE_ENV,
            process.env.REACT_APP_NOT_SECRET_CODE,
            process.env.REACT_APP_VERSION,
            process.env.REACT_APP_FOO,
            process.env.REACT_APP_BAR,
        );
    }

    render() {
        return (
            <>
                <PaysManager />
            </>
        );
    }
}

export default App;
