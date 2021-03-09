import React, { Component } from 'react'; // Besoin d'importer la librairie React pour utiliser du code JSX

// Cette fonction app est un composant (on utilise des minuscules habituellement pour des fonctions)
/*
function app() {
    return <h1>Hello World from App()</h1>;
}

export default app;
*/

// Pour définir un Component à partir d'une classe, cette dernière doit étendre React.Component, et obligatoirement
// définir la méthode render() (qui return du code JSX)
class App extends Component {
    render() {
        return <h1>Hello World from class App</h1 >;
    }
}

export default App;