import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Pays extends Component {
    state = {
        neighbours: null
    }

    componentDidMount = () => {
        if (this.props.isDetail && this.props.borders.length > 0) {
            axios.get(process.env.REACT_APP_RESTCOUNTRIES_API + `alpha?codes=${this.props.borders.join(';')}`)
                .then(response => {
                    this.setState({ neighbours: response.data });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }


    render() {
        // console.log(props);
        return (
            <div className="row no-gutters border m-2">
                <div className="col-4">
                    <img src={this.props.drapeau} width="100%" className="p-2" alt={this.props.nom} />
                </div>
                <div className="col">
                    <h4>Nom : {this.props.nomFr}</h4>
                    <div>Code pays : {this.props.code}</div>
                    <div>Capitale : {this.props.capitale}</div>
                    <div>R&eacute;gion : {this.props.region}</div>
                    {
                        this.props.isDetail ?
                            <>
                                <div>Nom d'origine : {this.props.nativeName}</div>
                                <div>Population : {this.props.population}</div>
                                <div>
                                    Langues :
                                    <ul>
                                        {this.props.languages.map(language => {
                                            return <li key={language.iso639_2}>{language.name}</li>;
                                        })}
                                    </ul>
                                </div>
                                {
                                    this.state.neighbours &&
                                        <div>
                                            Voisins :
                                            <ul>
                                                {this.state.neighbours.map(neighbour => {
                                                    return (
                                                        <li key={neighbour.alpha3Code}>
                                                            <img src={neighbour.flag}
                                                                style={{ width: "1.5em" }}
                                                                alt={neighbour.name} />
                                                            &nbsp;
                                                            {neighbour.translations.fr}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                }
                            </>
                            :
                            <div className="text-right px-3 py-1">
                                <NavLink to={(this.props.match ? this.props.match.url : '/pays') + "/" + this.props.nom} className="nav-link">Voir la fiche du pays</NavLink>
                            </div>
                    }
                </div>
            </div>
        );
    }
};

export default Pays;

/*
const pays = (props) => {
    // console.log(props);
    return (
        <div className="row no-gutters border m-2">
            <div className="col-4">
                <img src={props.drapeau} width="100%" className="p-2" alt={props.nom} />
            </div>
            <div className="col">
                <h4>Nom : {props.nomFr}</h4>
                <div>Code pays : {props.code}</div>
                <div>Capitale : {props.capitale}</div>
                <div>R&eacute;gion : {props.region}</div>
                {
                    props.isDetail ?
                        <>
                            <div>Nom d'origine : {props.nativeName}</div>
                            <div>Population : {props.population}</div>
                            <div>
                                Langues :
                                <ul>
                                    {props.languages.map(language => {
                                        return <li>{language.name}</li>;
                                    })}
                                </ul>
                            </div>
                        </>
                        :
                        <div className="text-right px-3 py-1">
                            <NavLink to={props.match.url + "/" + props.nom} className="nav-link">Voir la fiche du pays</NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default pays;
*/
