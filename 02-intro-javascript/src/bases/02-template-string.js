
const nombre = 'leyder';
const apellido = 'lele';

//const nombrecompleto = nombre + '' + apellido;

const nombrecompleto = `${nombre} ${apellido} ${1+1}`;

console.log(nombrecompleto) 

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${getSaludo(apellido)}`);