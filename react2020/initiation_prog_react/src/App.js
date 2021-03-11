import React, { Component, Fragment } from 'react'; // Besoin d'importer la librairie React pour utiliser du code JSX

import PersonneAsFunction from './Personne';
import PersonneAsClass from './Personne_as_Class';

import Horloge from './Horloge';

/*
// Cette fonction app est un composant (on utilise des minuscules habituellement pour des fonctions)
function app() {
    // Pour rappel, la fonction ne doit renvoyer qu'un SEUL �l�ment JSX.
    // Si on veut pouvoir renvoyer plusieurs �l�ments JSX, on peut soit :
    //  - utiliser une DIV qui encapsule l'int�gralit� du retour;
    // return (
    //  <div>
    //      <h1>Hello World from app() function</h1>
    //      <p>using div</p>
    //  </div>
    // );

    //  - utiliser un tableau [] dont les �l�ments sont s�par�s par des ","
    // return (
    //  [
    //      <h1>Hello World from app() function</h1>,
    //      <p>using table []</p>
    //  ]
    // );
    //  - utiliser le syst�me de FRAGMENT (React.Fragment) 
    return (
        <Fragment>
            <h1>Hello World from App()</h1>
            <p>using Fragment System</p>

            <Personne />
            <Personne />
            <Personne />
        </Fragment>
    );
    // NOTE : <Fragment></Fragment> peut �tre remplac� par <></> plus simplement (ce qui retire AUSSI la n�cessit� de l'import {Fragment}),
    //      MAIS <></> ne supporte NI les keys, NI les attributes

    // Exemple Fragment avec key (from : https://reactjs.org/docs/fragments.html)
    //  function Glossary(props) {
    //      return (
    //          <dl>
    //              {props.items.map(item => (
    //                  // Without the `key`, React will fire a key warning
    //                  <React.Fragment key={item.id}>
    //                      <dt>{item.term}</dt>
    //                      <dd>{item.description}</dd>
    //                  </React.Fragment>
    //              ))}
    //          </dl>
    //      );
    //  }

    // NOTE 2 : Si la version de React est trop vieille, il n'est pas impossible de trouver des Auxiliaires
    // Checker https://fr.reactjs.org/docs/higher-order-components.html
    // et https://stackoverflow.com/questions/50584509/how-to-create-auxiliary-higher-order-component-in-preact
}

export default app;
*/

// Pour d�finir un Component � partir d'une classe, cette derni�re doit �tendre React.Component, et obligatoirement
// d�finir la m�thode render() (qui return du code JSX)
class App extends Component {
    render() {
        return (
            <>
                <h1>Hello World from Component App</h1>
                <p>using Fragment System</p>

                <PersonneAsFunction nom="Jonathan" age="37" sexe="homme"/>
                <PersonneAsFunction nom="Catherine" age="22" sexe="femme"/>

                <PersonneAsClass nom="Leah" age="7" sexe="femme" />

                <Horloge />
            </>
        );
    }
}

export default App;
/*
*/