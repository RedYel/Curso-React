//Desestrucuturacion de arreglos 

const personajes = ['Goku','Vegeta','Trunks'];

// console.log( personajes[0]);
// console.log( personajes[1]);
// console.log( personajes[2]);

const [ , , p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log( letras, numeros);

// Tarea
//1. el primer valor del arreglo se llamara nombre
//2. se llamara setNombre
const tarea = ( valor ) => {
    return [valor, ()=>{console.log('hola mundo')}];
}
// Esta es una forma de hacer los mismo que abajo
const [ nombre, setNombre] = tarea( 'Goku' );
console.log( nombre);
setNombre();
// const arr = tarea( 'Goku' );
// arr[1]()