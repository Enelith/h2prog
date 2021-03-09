import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Le Code JSX est très proche du HTML
// ReactDOM.render(CODE_JSX, Target Element from DOM);
// ReactDOM.render(<h1 className="test">Hello World</h1>, document.getElementById("root"));
// <=> ReactDOM.render(React.createElement("h1", null, "Hello World"), document.getElementById("root"));

// <A /> <=> Appel du composant App
ReactDOM.render(<App />, document.getElementById("root"));