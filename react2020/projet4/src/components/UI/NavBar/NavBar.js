import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const navBar = (props) => (
    <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Ari&egrave;ge MGA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer exact to="/">
                        <Nav.Link >Accueil</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to="/localisation">
                        <Nav.Link >Localisation</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to="/contact">
                        <Nav.Link >Contact</Nav.Link>
                    </LinkContainer>
                    {/* 
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavLink to="/" >Accueil</NavLink>
                    */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);

export default navBar;
