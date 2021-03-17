import React, { Component } from 'react';

import TitreH1 from '../../components/Titres/TitreH1';
import Armes from '../../components/Armes/Armes';
import Bouton from '../../components/Boutons/Bouton';

import Personnage from './Personnage/Personnage';

class CreateurPersonnage extends Component {
    state = {
        personnage : {
            image: 1,
            force: 0,
            agilite: 0,
            intelligence: 0
        }
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

    render() {
        return (
            <>
                <div className="container">
                    <TitreH1 >Cr&eacute;ateur de personnage</TitreH1>

                    <Personnage
                        {...this.state.personnage}
                        precedente={this.imagePrecedenteHandler}
                        suivante={this.imageSuivanteHandler}
                    />
                    <Armes />

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
