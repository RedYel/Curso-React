// FC
import React from 'react';

const PrimeraApp = () =>{
    const saludo = 'Hola Mundo'
    return (
        //se elimino el Fragment        
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre> */}
            <p>Parrafo de la aplicacion</p>
        </>        
    );
    
}


export default PrimeraApp;