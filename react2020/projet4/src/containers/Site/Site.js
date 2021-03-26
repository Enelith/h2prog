import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import NavBar from '../../components/UI/NavBar/NavBar';
import Accueil from './Accueil/Accueil';
import Contact from './Contact/Contact';
import Localisation from './Localisation/Localisation';

class Site extends Component {
    render() {
        return (
            <>
                <NavBar />

                <Container>
                    <Switch >
                        <Route exact path="/" render={() => <Accueil />} />
                        <Route exact path="/localisation" render={() => <Localisation/>} />
                        <Route exact path="/contact" render={() => <Contact />} />
                    </Switch>
                </Container>
            </>
        );
    }
}

export default Site;
