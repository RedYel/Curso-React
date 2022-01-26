import react from "react";
import reactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";

import './index.css'
//const saludo = <h1>Hola mundo</h1>;

//console.log(saludo);

const divRoot = document.querySelector('#app');

reactDOM.render( <PrimeraApp  /> , divRoot );