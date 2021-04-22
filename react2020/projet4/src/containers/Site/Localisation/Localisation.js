import React, { Component } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Titre from 'components/UI/Titres/TitreH1';
import Button from 'react-bootstrap/Button';

import Select from 'react-select';

import Etablissement from './Etablissement/Etablissement';

class Localisation extends Component {
    state = {
        loading: false,
        departements: [],
        departementSelected: null,
        recherche: null
    }

    componentDidMount = () => {
        this.setState({ loading: true });

        axios.get(process.env.REACT_APP_API_GOUV_FR_DEPARTEMENTS)
            .then(response => {
                const departements = response.data.map(departement => {
                    return {
                        label: departement.nom,
                        value: departement.code
                    }
                });
                this.setState({ departements, departementSelected: departements[0].value, loading: false });
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            })
    }

    rechercheEtablissement = (type) => {
        console.log(this.state.departementSelected);
        console.log(process.env.REACT_APP_API_GOUV_FR_TYPE_BY_DEPARTEMENT + `${this.state.departementSelected}/${type}`);
        axios.get(process.env.REACT_APP_API_GOUV_FR_TYPE_BY_DEPARTEMENT + `${this.state.departementSelected}/${ type }`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    recherche: response.data.features
                })
            })
    }

    /*
     * CF API https://api.gouv.fr/documentation/api_etablissements_publics
     */

    render() {
        return (
            <>
                <Titre>Rechercher un &eacute;tablissement</Titre>

                {
                    this.state.loading && <div>Chargement...</div>
                }
                {
                    !this.state.loading && this.state.departements.length === 0 && <div>Api non disponible</div>
                }
                {
                    !this.state.loading && this.state.departements.length > 0 && 
                    <div>
                        <Row>
                            <Col sm={4}>
                                <Select
                                    options={this.state.departements}
                                    defaultValue={this.state.departements[0]}
                                    onChange={(target) => this.setState({ departementSelected: target.value }) } />
                            </Col>
                            <Col sm={8}>
                                <Button variant="secondary" onClick={() => this.rechercheEtablissement('mairie')} >Mairie</Button>&nbsp;
                                <Button variant="secondary" onClick={() => this.rechercheEtablissement('commissariat_police')} >Commissariat de police</Button>&nbsp;
                                <Button variant="secondary" onClick={() => this.rechercheEtablissement('pole_emploi')} >P&ocirc;le emploi</Button>&nbsp;
                                <Button variant="secondary" onClick={() => this.rechercheEtablissement('prefecture')} >Pr&eacute;fecture</Button>
                            </Col>
                        </Row>
                        <Row>
                            {
                                this.state.recherche && this.state.recherche.map((etablissement, index) => {
                                    return <Col key={index} md={6}><Etablissement {...etablissement} /></Col>
                                })
                            }
                        </Row>
                    </div>
                }
                

            </>
        );
    }
}

export default Localisation;
