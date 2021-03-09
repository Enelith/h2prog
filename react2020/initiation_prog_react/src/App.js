import React, { Component } from 'react'; // Besoin d'importer la librairie React pour utiliser du code JSX

// Cette fonction app est un composant (on utilise des minuscules habituellement pour des fonctions)
/*
function app() {
    return <h1>Hello World from App()</h1>;
}

export default app;
*/

// Pour d�finir un Component � partir d'une classe, cette derni�re doit �tendre React.Component, et obligatoirement
// d�finir la m�thode render() (qui return du code JSX)
class App extends Component {
    render() {
        return <h1>Hello World from class App</h1 >;
    }
}

export default App;