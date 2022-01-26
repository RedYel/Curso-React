// FC
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo } ) => {

    //const saludo = 'Hola Mundo';
    // if ( !saludo){
    //     throw new Error( 'El saludo es necesario' );
    // }

    //console.log( props );
    return (
        //se elimino el Fragment        
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre> */}
            <p>Parrafo de la aplicacion</p>
        </>        
    );
    
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;