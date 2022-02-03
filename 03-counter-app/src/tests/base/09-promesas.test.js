import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('pruebas en promesas asincronas', () => {
  
    test('Debe retornar un heroe async ', ( done ) => {
    
    const id = 1;

    getHeroeByIdAsync( id )
     .then( heroe => {

        expect( heroe ).toBe( heroes[0] );
        done();
        
     });
    
  });
  
  test('Debe de obtener un erore si el herore por id no existe', ( done ) => {
    
    const id = 10;

    getHeroeByIdAsync( id )
    .catch( error => {

        expect( error ).toBe( 'No se pudo encontrar el héroe' );
        done();
    });

  });
  
});
