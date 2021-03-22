import React, { Component } from 'react';

import Titre from '../../components/Titres/TitreH1';
import Bouton from '../../components/Boutons/Bouton';


class PaysManager extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <Titre >Liste des pays du monde</Titre>

                    <Bouton typeBtn="btn-info">Tous</Bouton>
                    <Bouton typeBtn="btn-info">Europe</Bouton>
                    <Bouton typeBtn="btn-info">Afrique</Bouton>
                    <Bouton typeBtn="btn-info">Asie</Bouton>
                    <Bouton typeBtn="btn-info">Am&eacute;rique</Bouton>
                    <Bouton typeBtn="btn-info">Oc&eacute;anie</Bouton>

                    <div>Pays</div>

                    <div>Pagination</div>
                </div>
            </>
        );
    }
}

export default PaysManager;
