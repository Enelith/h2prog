import React, { Component } from 'react';

import NavBar from '../../components/UI/NavBar/NavBar';
import Accueil from './Accueil/Accueil';
import Contact from './Contact/Contact';
import Localisation from './Localisation/Localisation';

class Site extends Component {
    render() {
        return (
            <>
                Site
                
                <NavBar />
                <Accueil />
                <Contact />
                <Localisation />
            </>
        );
    }
}

export default Site;
