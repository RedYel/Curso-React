import React, { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('Haz tu busqueda aquí');

    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( 'Submit Hecho' );
    }

  return (
    <form onSubmit={ handleSubmit }>
        <input
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
        />
    </form>
  )
};
