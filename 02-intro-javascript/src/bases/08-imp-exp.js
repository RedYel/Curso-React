//import, export y funciones comunes de arreglos
// en la importacion por defecto o hace falta utilizar llaves
import  heroes, {owners}  from './data/heroes';
console.log( owners );
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



const getHeroeById = (id) => heroes.find( ( heroe ) => heroe.id === id);

console.log( getHeroeById(5));

const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner);

console.log( getHeroesByOwner('DC'));