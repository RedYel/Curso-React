import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Batman']);

    // const handleAdd = () => {
    //     // setcategories( [...categories, 'Black Sails'] );
    //     setcategories( cats => [...cats, 'Black Sails']);
    // }

    return(
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            

            <ol>
                {
                    categories.map( (category, i) => (
                        <GifGrid 
                        key={ category }
                        category={ category }
                        />
                    ))
                }
            </ol>

        </>
    )

}

export default GifExpertApp;