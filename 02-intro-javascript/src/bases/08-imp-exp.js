//import, export y funciones comunes de arreglos
// en la importacion por defecto o hace falta utilizar llaves
//import  heroes, {owners}  from '../data/heroes';
import  heroes from '../data/heroes';
//console.log( owners );
// este codigo es demasiado largo para lo que se pidio asi que se simplificara
// const getHeroeById = (id) => {
//     return heroes.find( ( heroe ) => {
//         if ( heroe.id === id) {
//             return true;
//         }else {
//             return false;
//         }
//     } );
// }


// se puede exporttar esa funcion flecha solo agregando el export al inicio
export const getHeroeById = (id) => heroes.find( ( heroe ) => heroe.id === id);

//console.log( getHeroeById(5));

export const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner);

//console.log( getHeroesByOwner('DC'));
