
// test( 'esta es mi primera prueba, debe ser true', () => {
//     const isActive = true;

//     if ( isActive ){
//         throw new Error('No esta activo');
//     }

// } )

describe(' Pruebas en el archivo demo.test.js', => {

    test('deben de ser iguales los strings', () => {
    // 1. inicializacion
    const mensaje = 'Hola mundo';
    // 2. estimulo
    const mensaje2 = `Hola mundo`;
    // 3. Observar el comportamaiento
    expect( mensaje ).toBe( mensaje2 );
    });

});
