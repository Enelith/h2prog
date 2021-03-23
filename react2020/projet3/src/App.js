import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import PaysManager from './containers/PaysManager/PaysManager';
import NavBarDark from './components/NavBar/NavBarDark';
import NavBarLight from './components/NavBar/NavBarLight';

class App extends Component{

    componentDidMount = () => {
        console.log(
            process.env.NODE_ENV,
            process.env.REACT_APP_NOT_SECRET_CODE,
            process.env.REACT_APP_VERSION,
            process.env.REACT_APP_FOO,
            process.env.REACT_APP_BAR,
        );
    }

    /**
     * - Utiliser BrowserRouter (tir� de react-router-dom) va indiquer � notre application qu'on va utiliser le syst�me de routage.
     * De plus, ce module va nous permettre, quand on mettra notre application en ligne, de d�finir quelle est l'url de base pour acc�der � l'application.
     * Ce sera alors particul�rement int�ressant quand on veut faire un sous domaine
     * 
     * - Cr�er une Route va nous permettre d'acc�der ici � notre composant PaysManager, mais �galement � une page d'accueil
     *      -> Route s'utilise avec un chemin (BEGIN WITH), qu'on place dans la propri�t� "path", qui va nous permettre de d�finir quelle est la route / URL on va g�rer 
     *      -> la propri�t� "component" indique quel composant va �tre affich� � l'�cran pour ce path (ne nous permet pas cependant de pr�ciser des props)
     *      -> la propri�t� "render" (qui permet une plus grande libert� que "component")
     *      -> la propri�t� "exact" indique que le composant n'est accessible QUE pour cette URL stricte (sans �a, on pourrait par exemple tjrs acc�der � PaysManager via
     *      http://localhost:3000/toto, alors qu'avec "exact", on obtiendrait une erreur)
     *      
     * - On peut faire des liens vers les diff�rentes routes / URL qu'on aura d�finit par le biais des balises <a href>. 
     * Cependant, ces balises vont refresh la page, ce qui n'est pas le comportement attendu.
     * Pour se faire, on utilisera alors les Link ou les NavLink de react-router-dom (des props sont possibles sur les composants LINK) => Site tr�s r�actif
     */
    render() {
        return (
            <>
                <BrowserRouter>
                    {/*
                    <Link to="/">Page d'accueil</Link>
                    <Link to="/pays">Liste des pays</Link>
                    <Link to="/pays/render">Liste des pays (using RENDER Route property)</Link>
                    <Link to="/pays/component">Liste des pays (using COMPONENT Route property)</Link>
                    */}

                    <Route path="/admin" exact children={({ match }) => { return (match ? <NavBarLight /> : <NavBarDark />)}} />

                    <Route path="/" exact render={() => (<h1>Page d'accueil</h1>)} />
                    <Route path="/pays" exact component={PaysManager} />
                    <Route path="/pays/:id" render={(props) => {
                        {/* On peut cumuler les params (ex : /pays/:id/:test => props.match.params.id & props.match.params.test) */}
                        console.log("App Props for /pays/:id", props);
                        return (<h1>Page du pays : {props.match.params.id}</h1>)
                    }} />

                    <Route path="/pays/render" exact render={() => <PaysManager />} />
                    <Route path="/pays/component" exact component={PaysManager} />
                    <Route path="/admin" exact render={() => <h1>Page d'admin</h1>} />
                </BrowserRouter>
            </>
        );
    }
}

export default App;
