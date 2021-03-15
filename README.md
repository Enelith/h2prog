# h2prog

# Create a React Project : 
https://fr.reactjs.org/docs/create-a-new-react-app.html

# Create new React Project (NodeJS version should be high enough) : 
npx create-react-app PROJECT_NAME
# Execute application (move into PROJECT_NAME application folder) : 
npm start

# Adding Bootstrap
https://create-react-app.dev/docs/adding-bootstrap/
# Themes for Bootstrap
https://bootswatch.com/

## ESX (ECMAScript X)
Check : https://fr.wikipedia.org/wiki/ECMAScript

# Visual Studio et Snippets
https://docs.microsoft.com/fr-fr/visualstudio/ide/walkthrough-creating-a-code-snippet?view=vs-2019

# Cours : REACT 2020
https://www.udemy.com/course/react-2020-par-la-pratique-de-a-a-z-evolution-progressive/

##################################################################################"
"
# Notes : 
- React favorise la GRANULARITE (mise en place d'un niveau de GRANULARITE important) pour permettre la réutilisation des composants en divers endroits 
- Cycle de vie de REACT : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- Why immutability is important ? : https://fr.reactjs.org/tutorial/tutorial.html#why-immutability-is-important

# Structure de projet
Dans src, créer des dossiers "containers" et "components" qui représenteront respectivement des composants STATEFUL (typiquement des class avec state) 
et STATELESS (des functions, pour simple affichage).
Le dossier "asset" contiendra l'ensemble des assets de l'application (ex : images, ...)

# React.Fragment
https://fr.reactjs.org/docs/fragments.html
En React, il est courant pour un composant de renvoyer plusieurs éléments. 
Les fragments nous permettent de grouper une liste d’enfants sans ajouter de nœud supplémentaire au DOM.

# React.StrictMode
https://fr.reactjs.org/docs/strict-mode.html
StrictMode est un outil pour détecter les problèmes potentiels d’une application. Tout comme Fragment, StrictMode n’affiche rien. 
Il active des vérifications et avertissements supplémentaires pour ses descendants.

REMARQUE :
Les vérifications du mode strict sont effectuées uniquement durant le développement. Elles n’impactent pas la version utilisée en production.

# Encodage caractères
https://outils-javascript.aliasdmc.fr/encodage-caracteres-accentues/encode-caractere-00E9-html-css-js-autre.html

# Module : FORMIK
Permet de gérer la validation des données
npm install --save formik
http://jaredpalmer.com/formik
http://jaredpalmer.com/formik/docs/api/withFormik

# Module YUP

