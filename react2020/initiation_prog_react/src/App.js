import React, { Component, Fragment } from 'react'; // Besoin d'importer la librairie React pour utiliser du code JSX

import './App.css';

import PersonneAsFunction from './components/Personne/Personne';
import PersonneAsClass from './components/Personne/PersonneAsClass';

import AgePersonne from './components/Personne/AgePersonne/AgePersonne';

import Horloge from './containers/Horloge/Horloge';

import BaseButtons from './components/BaseButtons/BaseButtons';

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
    state = {
        personnesAsFunction: [
            { nom: "Leah", age: 7, sexe: false },
        ],
        personnesAsClass: [
            { nom: "Jonathan", age: 37, sexe: true },
            { nom: "Catherine", age: 22, sexe: false },
            { nom: "Leah", age: 7, sexe: false },
        ]
    }

    anniversaireHandler = () => {
        // On DOIT respecer l'immutabilit� (https://fr.reactjs.org/tutorial/tutorial.html#why-immutability-is-important) : ne pas modifier les infos directement

        /*
        // const newPersonnes = this.state.personnesAsClass; // IMPORTANT : WRONG ~ Copie de la r�f�rence de l'objet
        const newPersonnes = this.state.personnesAsClass.slice(); // OK ~ Copie de l'objet
        // <=> const newPersonnes = [...this.state.personnesAsClass]; // Version ES6 ou ES7

        for (let i = 0; i < newPersonnes.length; i++) {
            newPersonnes[i].age++;
        }
        */
        const newPersonnes = this.state.personnesAsClass.map(personne => {
            return {
                nom: personne.nom,
                age: personne.age + 1,
                sexe: personne.sexe
            }
        });

        // V�rification de l'immutabilit�
        console.log(this.state.personnesAsClass, newPersonnes);

        this.setState({ personnesAsClass: newPersonnes });
        // <=> this.setState(newPersonnes);
    }

    /*
     * Note : Respect de l'immutabilit� � tous les niveaux
     */
    birthdayHandler = (indicePersonne) => {
        // G�n�re une copie de la personne sur laquelle on a cliqu� (NOUVELLE personne)
        const newPersonne = { ...this.state.personnesAsClass[indicePersonne] };
        // Augmente l'�ge de la personne copi�e
        newPersonne.age++;

        // On duplique le tableau de personnes original (NOUVEAU tableau)
        const newTabPersonnes = [...this.state.personnesAsClass];
        // On remplace la personne � l'indice du tableau sur lequel on a cliqu� par la NOUVELLE personne qu'on a cr��e
        newTabPersonnes[indicePersonne] = newPersonne;

        // On remplace dans le STATE le tableau de personnesAsClass par le NOUVEAU tableau 
        this.setState({ personnesAsClass: newTabPersonnes });
    }

    /*
     * Pour envoyer toutes les props vers un component, utiliser {...this.state.xxx};
     * Pour n'envoyer que des propri�t�s bien sp�cifiques, il va falloir d�finir ces derni�res manuellement (ex: nom={this.state.personnesAsFunction[0].nom})
     */
    render() {
        return (
            <>
                <h1>Hello World from Component App</h1>
                <p>using Fragment System</p>

                <Horloge />

                <PersonneAsFunction 
                    nom={this.state.personnesAsFunction[0].nom}
                    age={this.state.personnesAsFunction[0].age}
                    sexe={this.state.personnesAsFunction[0].sexe} />

                <PersonneAsClass {...this.state.personnesAsClass[0]} birthdayHandler={this.birthdayHandler.bind(this, 0)}/>
                <PersonneAsClass {...this.state.personnesAsClass[1]} birthdayHandler={() => this.birthdayHandler(1)} >
                    <fieldset>
                        <legend>Transmis en CHILDREN</legend>
                        <p >Ma couleur pr&eacute;f&eacute;r&eacute;e est le ORANGE (ceci sera r&eacute;cup&eacute;r&eacute; dans le composant via les props (.children)</p>
                        <AgePersonne age={this.state.personnesAsClass[1].age} /> <i>(juste pour l'exemple : requiert alors d'importer le component AgePersonne dans App.js)</i>
                    </fieldset>
                </PersonneAsClass>
                <PersonneAsClass {...this.state.personnesAsClass[2]} birthdayHandler={() => this.birthdayHandler(2)} />

                <button onClick={this.anniversaireHandler}>Happy Birthday Everyone !</button>

                <hr />

                <h2>Affichage via liste</h2>

                {
                    this.state.personnesAsClass.map((personne, index) => {
                        return (
                            <PersonneAsClass {...personne} birthdayHandler={() => this.birthdayHandler(index)} >
                                <AgePersonne age={personne.age} /> (Transmis en CHILDREN)
                            </PersonneAsClass>    
                        );
                    })
                }

                <BaseButtons />
            </>
        );
    }
}

export default App;
/*
*/