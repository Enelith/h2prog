import React from 'react';
import ReactDOM from 'react-dom';

// Le Code JSX est très proche du HTML
// ReactDOM.render(CODE_JSX, Target Element from DOM);
ReactDOM.render(<h1 className="test">Hello World</h1>, document.getElementById("root"));
// <=> ReactDOM.render(React.createElement("h1", null, "Hello World"), document.getElementById("root"));