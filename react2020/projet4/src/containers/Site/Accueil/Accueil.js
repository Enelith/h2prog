import React from 'react';
import Image from 'react-bootstrap/Image';

import Titre from 'components/UI/Titres/TitreH1';
import imgAccueil from 'assets/images/chateau.jpg';

const accueil = (props) => (
    <>
        <Titre >Bienvenue sur le site de l'Ari&egrave;ge</Titre>

        <p>Le site vous aidant &agrave; trouver les &eacute;tablissements publics de l'Ari&egrave;ge</p>

        <Image src={imgAccueil} fluid thumbnail style={{ width: '100%'}} />
    </>
);

export default accueil;
