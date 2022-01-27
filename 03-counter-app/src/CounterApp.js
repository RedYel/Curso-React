// FC
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState( 0 );
    //console.log(nombre, setNombre);

    const handleAdd = (e) => {
        //setCounter( counter + 1 );
        setCounter( (c) => c + 1 );
    }

    return (               
        <>
            <h1> CounterApp </h1>            
            <p> { counter } </p>
            {/*<button onClick={ (e) => {handleAdd(e)} }>+1</button>*/}
            <button onClick={ handleAdd }>+1</button>
        </>        
    );
    
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;