//tener la variable react en scope (cargar la libreria react)
//tener la variable reactDOM en scope
//tener la viariable App en scope
//hacer render de la App en el DOM

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js"
import "./assets/styles/style.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);