import React from 'react';

import { NavLink } from 'react-router-dom';

const navbar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">Page d'accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/pays" className="nav-link">Liste des pays</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/pays/render" className="nav-link">... via RENDER Route property</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/pays/component" className="nav-link">... via COMPONENT Route property</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/admin" className="nav-link">Admin</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
);

export default navbar;
