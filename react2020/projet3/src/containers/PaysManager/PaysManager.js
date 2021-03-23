import React, { Component } from 'react';
import axios from 'axios';

import Titre from '../../components/Titres/TitreH1';
import Bouton from '../../components/Boutons/Bouton';

import Pays from './Pays/Pays';


class PaysManager extends Component {
    state = {
        listePays: [],
        loading: false,
        regionSelected: null
    }

    componentDidMount = () => {
        this.loadCountries('all');
    }

    changeRegionHandler = (region) => {
        this.loadCountries(region);
    }

    loadCountries = (region) => {
        let urlTarget = region;
        if (region !== 'all') {
            urlTarget = `region/${region}`;
        }

        this.setState({ loading: true });

        axios.get(`${process.env.REACT_APP_RESTCOUNTRIES_API}${urlTarget}`)
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

                this.setState({
                    listePays,
                    loading: false,
                    regionSelected: region
                }); // <=> this.setState({listePays: listePays});
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    regionSelected: region
                });
            });
    }

    render() {
        return (
            <>
                <div className="container">
                    <Titre >Liste des pays du monde</Titre>

                    <Bouton typeBtn="btn-info"
                        buttonAction={() => this.changeRegionHandler('all')}
                        isSelected={this.state.regionSelected === 'all'} > Tous</Bouton>

                    <Bouton typeBtn="btn-info"
                        buttonAction={() => this.changeRegionHandler('europe')}
                        isSelected={this.state.regionSelected === 'europe'} > Europe</Bouton>

                    <Bouton typeBtn="btn-info"
                        buttonAction={() => this.changeRegionHandler('africa')}
                        isSelected={this.state.regionSelected === 'africa'} >Afrique</Bouton>

                    <Bouton typeBtn="btn-info"
                        buttonAction={() => this.changeRegionHandler('asia')}
                        isSelected={this.state.regionSelected === 'asia'} >Asie</Bouton>

                    <Bouton typeBtn="btn-info"
                        buttonAction={() => this.changeRegionHandler('americas')}
                        isSelected={this.state.regionSelected === 'americas'} >Am&eacute;rique</Bouton>

                    <Bouton typeBtn="btn-info"
                        buttonAction={() => this.changeRegionHandler('oceania')}
                        isSelected={this.state.regionSelected === 'oceania'} >Oc&eacute;anie</Bouton>

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
