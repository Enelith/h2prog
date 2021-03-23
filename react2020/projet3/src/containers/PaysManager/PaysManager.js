import React, { Component } from 'react';
import axios from 'axios';

import Titre from '../../components/Titres/TitreH1';
import Bouton from '../../components/Boutons/Bouton';

import Pays from './Pays/Pays';


class PaysManager extends Component {
    state = {
        listePays: [],
        loading: false,
        regionSelected: null,
        currentPage: 1
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
                    regionSelected: region,
                    currentPage: 1
                }); // <=> this.setState({listePays: listePays});
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    regionSelected: region,
                    currentPage: 1
                });
            });
    }

    render() {
        let pagination = [];
        let displayListePays = [];

        if (this.state.listePays) {
            let nbBoutonsRequis = this.state.listePays.length / 10; // Max affichage 10 elements

            if (this.state.listePays.length % 10 !== 0) {
                nbBoutonsRequis++;
            }

            for (let i = 1; i <= nbBoutonsRequis; i++) {
                pagination.push(
                    <Bouton key={i}
                        typeBtn="btn-info"
                        buttonAction={() => this.setState({ currentPage: i })}
                        isSelected={this.state.currentPage === i}
                    >{i}</Bouton>
                );
            }

            const startIndex = (this.state.currentPage - 1) * 10;
            const endIndex = this.state.currentPage * 10;
            const listeReduite = this.state.listePays.slice(startIndex, endIndex);

            displayListePays = listeReduite.map(pays => {
                return (
                    <div key={pays.code} className="col-12 col-md-6 ">
                        <Pays {...pays} {...this.props} /> {/* Transfert des props contenant toutes les informations du routage au composant Pays */}
                    </div>
                );
            })
        }

        return (
            <>
                <div className="container">
                    <Titre >Liste des pays du monde</Titre>

                    <div className="row no-gutters">
                        <div className="col-lg-8 col-md-12">
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
                        </div>
                        <div className="col-lg-4 text-right">
                            Nombre de pays : <span className="badge badge-success">{this.state.listePays.length}</span>
                        </div>
                    </div>
                    {
                        this.state.loading ?
                            <div>Loading...</div> :
                            <div className="row no-gutters">
                                {displayListePays}
                            </div>
                    }

                    <div>{pagination}</div>
                </div>
            </>
        );
    }
}

export default PaysManager;
