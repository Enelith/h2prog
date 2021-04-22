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
# React-bootstrap
https://react-bootstrap.github.io/
(npm install --save bootstrap react-bootstrap react-router-bootstrap)

## ESX (ECMAScript X)
Check : https://fr.wikipedia.org/wiki/ECMAScript

# Visual Studio et Snippets
https://docs.microsoft.com/fr-fr/visualstudio/ide/walkthrough-creating-a-code-snippet?view=vs-2019

# Cours : REACT 2020
https://www.udemy.com/course/react-2020-par-la-pratique-de-a-a-z-evolution-progressive/

##################################################################################

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
Yup is a JavaScript schema builder for value parsing and validation. Define a schema, transform a value to match, validate the shape of an existing value, 
or both. 
Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformations.

npm install --save yup
https://github.com/jquense/yup

# CSS Tricks and Tips
https://bennettfeely.com/
https://bennettfeely.com/clippy/
https://bennettfeely.com/scales/
...

# Webpack
https://webpack.js.org/configuration/

# Webpack > Loading path & files
https://webpack.js.org/loaders/file-loader/
https://webpack.js.org/configuration/resolve/

## REACT APP REWIRED (redefine WEBPACK configs)
https://github.com/timarney/react-app-rewired
npm install react-app-rewired --save-dev

# Axios
https://github.com/axios/axios
npm install --save axios

# Routage : React-router et react-router-dom.
Installer react-router-dom installera automatiquement l'autre dépendance (react-router)
npm install --save react-router-dom

Ces modules vont nous permettre de gérer le routage de nos pages, et de réaliser un site internet entièrement développé avec React.
Au final, nous aurons un site web qui n'aura qu'une seule page, et plusieurs liens pour activer certains compartiments de celui-ci, et afficher le résultat 
à l'écran de l'utilisateur.

Le gros avantage de ce type de site est la rapidité d'execution une fois qu'il est chargé.
En effet, tout le site est renvoyé à l'utilisateur, qui peut ensuite naviguer dedans de manière quasi-instantanée.
https://reactrouter.com/web/guides/quick-start

## React-router > BrowserRouter
A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
https://reactrouter.com/web/api/BrowserRouter

## React-router  > HashRouter
A <Router> that uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.
https://reactrouter.com/web/api/HashRouter

## React-router  > Route
The Route component is perhaps the most important component in React Router to understand and learn to use well. 
Its most basic responsibility is to render some UI when its path matches the current URL (DISPATCH INTO RENDER / COMPONENT / CHILDREN)
https://reactrouter.com/web/api/Route

## React-router  > Link 
Provides declarative, accessible navigation around your application.
https://reactrouter.com/web/api/Link

## React-router  > NavLink
A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
https://reactrouter.com/web/api/NavLink

# Environment Files
https://create-react-app.dev/docs/adding-custom-environment-variables/
https://medium.com/@tacomanator/environments-with-create-react-app-7b645312c09d