import React, { Component } from 'react';

import TitreH1 from '../../components/Titres/TitreH1';
import Bouton from '../../components/Boutons/Bouton';

import Personnage from './Personnage/Personnage';
import Armes from './Armes/Armes';

class CreateurPersonnage extends Component {
    state = {
        personnage : {
            image: 1,
            force: 0,
            agilite: 0,
            intelligence: 0
        },
        nbPointsDisponibles: 7,
        armes: ["epee", "fleau", "arc", "hache"]
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
                    <Armes listeArmes={this.state.armes} />

                    <div className="row no-gutters">
                        <Bouton
                            typeBtn="btn-danger"
                            css="col-6"
                            buttonAction={() => console.log("R\u00e9initialiser")}>
                            R&eacute;initialiser
                        </Bouton>
                        <Bouton
                            typeBtn="btn-success"
                            css="col-6"
                            buttonAction={() => console.log("Cr\u00e9er")}>
                            Cr&eacute;er
                        </Bouton>
                    </div>
                </div>

            </>
        );
    }
}

export default CreateurPersonnage;
