import React, { Component } from 'react';
import axios from 'axios';

import Titre from '../../components/Titres/TitreH1';
import Bouton from '../../components/Boutons/Bouton';

import Pays from './Pays/Pays';


class PaysManager extends Component {
    state = {
        listePays: [],
        loading: false
    }

    componentDidMount = () => {
        this.setState({ loading: true });

        axios.get(process.env.REACT_APP_RESTCOUNTRIES_API + 'all')
            .then(response => {
                const listePays = response.data.map(pays => {
                    return {
                        nom: pays.name,
                        nomFr: pays.translations.fr,
                        code: pays.alpha3Code,
                        capitale: pays.capital,
                        region: pays.region,
                        drapeau: pays.flag
                    }
                });

                this.setState({ listePays, loading: false }); // <=> this.setState({listePays: listePays});
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            });
    }

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

                    {
                        this.state.loading ?
                            <div>Loading...</div> :
                            <div className="row no-gutters">
                                {
                                    this.state.listePays.map(pays => {
                                        return (
                                            <div key={pays.code} className="col-12 col-md-6 "><Pays {...pays} /></div>
                                        );
                                    })
                                }
                            </div>
                    }

                    <div>Pagination</div>
                </div>
            </>
        );
    }
}

export default PaysManager;
