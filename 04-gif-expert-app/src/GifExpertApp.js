import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One punch','Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     // setcategories( [...categories, 'Black Sails'] );
    //     setcategories( cats => [...cats, 'Black Sails']);
    // }

    return(
        <>
            <h2> GifExpertApp </h2>
            <AddCategory/>
            <hr/>

            

            <ol>
                {
                    categories.map( (category, i) => {
                        return <li key={ category }> { category} </li>
                    })
                }
            </ol>

        </>
    )

}

export default GifExpertApp;