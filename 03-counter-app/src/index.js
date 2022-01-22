import react from "react";
import reactDOM from "react-dom";

const saludo = <h1>Hola mundo</h1>;

//console.log(saludo);

const divRoot = document.querySelector('#app');

reactDOM.render( saludo, divRoot );