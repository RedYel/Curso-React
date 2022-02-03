import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    
    test('debe de retornar un heroe por id', () => {
      
        const id = 1;
        const heroe = getHeroeById( id );
        
        const heroesData = heroes.find( h => h.id === id);
        
        expect( heroe ).toEqual( heroesData );

    });
    
    test('debe de retornar undefined si id.heroe no existe ', () => {
      
        const id = 10;
        const heroe = getHeroeById( id );
        
        expect( heroe ).toBe( undefined );

    });
    
    test('debe retornar un arreglo con los herores de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroesDc = heroes.filter( h => h.owner === owner );
        
        expect( heroes ).toEqual( heroesDc );
    });
    
    test('debe de retornar un arreglo con los heroes de Marvel', () => {
      const owner = 'Marvel';
      const heroes = getHeroesByOwner( owner );
        //console.log( heroes);
      expect( heroes.length ).toBe( 2 );
    });
    

})