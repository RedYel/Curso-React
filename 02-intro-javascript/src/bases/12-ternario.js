// operador condicional ternario y version corta

const activo = true;

//let mensaje = '';

// if ( activo){
//     mensaje = 'Activo';
// } else{
//     mensaje = 'Inactivo';
// }
//const mensaje = ( !activo ) ? 'activo': 'inactivo';
// const mensaje = !activo && 'Activo';
const mensaje = ( activo === true ) && 'Activo';

console.log( mensaje);