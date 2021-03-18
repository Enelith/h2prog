import React, { Component } from 'react';

import TitreH1 from '../../components/Titres/TitreH1';
import Bouton from '../../components/Boutons/Bouton';

import Personnage from './Personnage/Personnage';
import Armes from './Armes/Armes';

import axios from 'axios';

class CreateurPersonnage extends Component {
    state = {
        personnage : {
            image: 1,
            force: 0,
            agilite: 0,
            intelligence: 0,
            arme: null
        },
        nbPointsDisponibles: 7,
        armes: null, // ["epee", "fleau", "arc", "hache"] // On va récupérer ces valeurs directement depuis Firebase, via Axios
        loading: false
    }

    componentDidMount = () => {
        this.setState({ loading: true });
        // Axios utilise le systeme des promesses
        axios.get("https://jvi-react-proj2-creaperso-default-rtdb.firebaseio.com/armes.json")
            .then(response => {
                console.log(response);
                // const armesArray = Object.keys(response.data); // Converti les keys de l'objet response.data en tableau
                const armesArray = Object.values(response.data); // Converti les valeurs de l'objet response.data en tableau
                // const armesArray = Object.entries(response.data); // Converti les paires de l'objet response.data en tableau
                this.setState({ armes: armesArray, loading: false });
            })
            .catch(error => {
                console.log(error);
                this.setState({ loading: false });
            })
    }

    imagePrecedenteHandler = () => {
        this.setState(oldState => {
            const newPersonnage = { ...oldState.personnage };
            newPersonnage.image = (oldState.personnage.image <= 1 ? 3 : oldState.personnage.image - 1);
            return { personnage: newPersonnage };
        });
    }

    imageSuivanteHandler = () => {
        this.setState(oldState => {
            const newPersonnage = { ...oldState.personnage };
            newPersonnage.image = (oldState.personnage.image >= 3 ? 1 : oldState.personnage.image + 1);
            return { personnage: newPersonnage };
        });
    }

    enleverPointHandler = (carac) => {
        this.setState(oldState => {
            if (oldState.personnage[carac] <= 0) return null; // Min 0 dans les caracs
            const newPointCarac = oldState.personnage[carac] - 1;
            const newPersonnage = { ...oldState.personnage };
            const newNbPointsDisponibles = oldState.nbPointsDisponibles + 1;

            newPersonnage[carac] = newPointCarac;

            return {
                personnage: newPersonnage,
                nbPointsDisponibles: newNbPointsDisponibles
            }
        });
    }

    ajouterPointHandler = (carac) => {
        this.setState(oldState => {
            if (oldState.personnage[carac] >= 5 || oldState.nbPointsDisponibles <= 0) return null; // Max 5 dans les caracs
            const newPointCarac = oldState.personnage[carac] + 1;
            const newPersonnage = { ...oldState.personnage };
            const newNbPointsDisponibles = oldState.nbPointsDisponibles - 1;

            newPersonnage[carac] = newPointCarac;

            return {
                personnage: newPersonnage,
                nbPointsDisponibles: newNbPointsDisponibles
            }
        });
    }

    changeArmeHandler = (arme) => {
        const newPersonnage = { ...this.state.personnage };
        newPersonnage.arme = arme;
        this.setState({ personnage: newPersonnage });
    }

    reinitialisationHandler = () => {
        this.setState({
            personnage: {
                image: 1,
                force: 0,
                agilite: 0,
                intelligence: 0,
                arme: null
            },
            nbPointsDisponibles: 7,
            armes: ["epee", "fleau", "arc", "hache"]
        });
    }

    validationHandler = () => {
        alert("Personnage cr\u00E9e");
    }

    render() {
        return (
            <>
                <div className="container">
                    <TitreH1 >Cr&eacute;ateur de personnage</TitreH1>

                    <Personnage
                        {...this.state.personnage}
                        precedente={this.imagePrecedenteHandler}
                        suivante={this.imageSuivanteHandler}
                        nbPointsDisponibles={this.state.nbPointsDisponibles}
                        enleverPoint={this.enleverPointHandler}
                        ajouterPoint={this.ajouterPointHandler}
                    />
                    {
                        this.state.armes &&
                        <Armes listeArmes={this.state.armes}
                            changeArme={this.changeArmeHandler}
                            currentArme={this.state.personnage.arme}
                        />
                    }
                    {
                        this.state.loading && <div>Loading...</div>
                    }
                    <div className="row no-gutters">
                        <Bouton
                            typeBtn="btn-danger"
                            css="col-6"
                            buttonAction={this.reinitialisationHandler}>
                            R&eacute;initialiser
                        </Bouton>
                        <Bouton
                            typeBtn="btn-success"
                            css="col-6"
                            buttonAction={this.validationHandler}>
                            Cr&eacute;er
                        </Bouton>
                    </div>
                </div>

            </>
        );
    }
}

export default CreateurPersonnage;
