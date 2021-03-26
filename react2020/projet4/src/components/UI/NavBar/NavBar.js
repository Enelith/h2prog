import React from 'react';
import { NavLink } from 'react-router-dom';

const navBar = (props) => (
    <>
        <NavLink to="/" >Accueil</NavLink>
        <NavLink to="/localisation" >Localisation</NavLink>
        <NavLink to="/contact" >Contact</NavLink>
    </>
);

export default navBar;
