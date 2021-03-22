import React, { Component } from 'react';
import axios from 'axios';

import Personnage from './Personnage/Personnage';

class ListePersonnage extends Component {
    state = {
        personnages: null,
        loading: false
    }

    loadData = () => {
        this.setState({ loading: true });

        axios.get('https://jvi-react-proj2-creaperso-default-rtdb.firebaseio.com/persos.json')
            .then(response => {
                const personnages = Object.values(response.data);

                this.setState({
                    personnages: personnages,
                    loading: false
                }); // <=> this.setState({ personnages, loading: false }); // car exactement les même noms pour personnages
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            })
    }

    componentDidMount = () => {
        this.loadData();
    }

    // Methode called quand le state > refresh de App est mis à jour
    componentDidUpdate = (oldProps, oldState) => {
        if (oldProps.refresh !== this.props.refresh) {
            this.loadData();
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    { this.state.loading && <div >Loading...</div>}
                    {
                        !this.state.loading && this.state.personnages && 
                        <div className="row no-gutters">
                            {this.state.personnages.map((perso, index) => {
                                return (
                                    <div className="col-6" key={index}>
                                        <Personnage {...perso} />
                                    </div>
                                );
                            })}
                        </div>
                    }
                </div>
            </>
        );
    }
}

export default ListePersonnage;
