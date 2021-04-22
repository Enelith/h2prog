import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import NavBar from 'components/UI/NavBar/NavBar';
import Route404 from 'components/Route404/Route404';
import Footer from 'components/Footer/Footer';

import Accueil from './Accueil/Accueil';
import Contact from './Contact/Contact';
import Localisation from './Localisation/Localisation';


class Site extends Component {
    render() {
        return (
            <>
                <div className="site">
                    <NavBar />

                    <Container>
                        <Switch >
                            <Route exact path="/" render={() => <Accueil />} />
                            <Route path="/localisation" render={() => <Localisation/>} />
                            <Route path="/contact" render={(props) => <Contact {...props} />} />

                            <Route render={() => <Route404 />} />
                        </Switch>
                    </Container>

                    <div className="minSite" />
                </div>
                <Footer />
            </>
        );
    }
}

export default Site;
