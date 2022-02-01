import { getUser, getUsuarioActivo } from "../../base/05-funciones";
import '@testing-library/jest-dom';

describe(' Pruebas en funciones', () => {
    test('getUser debe de retornar un objeto', () => {
      
        const userTest = {
        uid: 'ABC123',
        username: 'El_Papi1502'
      }

      const user = getUser();

      console.log( user );

      expect( user ).toEqual( userTest );
    });

    //GetUsuario activo debe de retorar un objeto
  
    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'leyder';

        const userTest2 = {
            uid: 'ABC567',
            username: nombre
        }
        
        const user2 = getUsuarioActivo( nombre );

        // console.log( userTest2 );
        // console.log( user2 );
        expect( user2 ).toEqual( userTest2 );
    });
        
   
    
});