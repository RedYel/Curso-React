import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe( 'Prueba en el metodo getSaludo', () => {

    test(' getSaludo debe retronar Hola leyder', () => {
      
        const nombre = 'leyder';
        
        const saludo = getSaludo( nombre );
        //console.log( saludo );
        expect( saludo ).toBe( 'Hola ' + nombre );
    });

    // getSaludo debe de reotrnar Hola carlos si no hay argumento nombre
    test('Si no tiene argumento debe retornar Hola carlos', () => {
      const saludo = getSaludo();
      expect( saludo ).toBe('Hola carlos');
    });
    
} );