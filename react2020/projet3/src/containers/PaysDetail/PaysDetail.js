import React, { Component } from 'react';
import axios from 'axios';

import Titre from '../../components/Titres/TitreH1';
import Pays from '../PaysManager/Pays/Pays';

class PaysDetail extends Component {
    state = {
        data: null,
        loading: false
    }

    componentDidMount = () => {
        this.setState({ loading: true });

        axios.get(process.env.REACT_APP_RESTCOUNTRIES_API + `name/${this.props.nomPays}?fullText=true`)
            .then(response => {
                console.log(response.data[0]);
                this.setState({
                    data: response.data[0],
                    loading: false
                });
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <>
                <div className="container">
                    <Titre>{this.props.nomPays}</Titre>
                    {
                        this.state.data &&
                        <Pays
                            nom={this.state.data.name}
                            nomFr={this.state.data.translations.fr}
                            code={this.state.data.alpha3Code}
                            capitale={this.state.data.capital}
                            region={this.state.data.region}
                            drapeau={this.state.data.flag}
                            {...this.state.data}
                            {...this.props}
                            isDetail={true}
                        />
                    }
                </div>
            </>
        );
    }
}

export default PaysDetail;
