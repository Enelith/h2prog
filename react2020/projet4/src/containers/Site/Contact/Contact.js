import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Route } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';
import Titre from 'components/UI/Titres/TitreH1';
import ContactForm from './ContactForm/ContactForm';

class Contact extends Component {
    render() {
        return (
            <>
                <Titre>Contactez-nous</Titre>

                <div>
                    <h2>Adresse</h2>
                    xxxxxx
                    <h2>T&eacute;l&eacute;phone</h2>
                    xxxxxx
                </div>

                <h2>Vous pr&eacute;f&eacute;rez nous &eacute;crire ?</h2>
                <LinkContainer to={this.props.match.url + '/form'} >
                    <Button variant="primary">Formulaire de contact</Button>
                </LinkContainer>

                <Route path={this.props.match.url + '/form'} render={(props) => <ContactForm />} />
            </>
        );
    }
}

export default Contact;
