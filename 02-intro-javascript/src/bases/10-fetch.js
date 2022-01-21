//Api fecth

const   apiKey = '7o4oshT61TLIaGK7U8x8XLXu7djzW2kF';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        // Las promesas pueden encadenarse
peticion
    .then( resp => resp.json() )
    .then( ({ data }) =>{
    //console.log( resp );
    // resp.json().then( data => {
        const { url } = data.images.original;     
        //console.log( url );
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    // })    
    })
    .catch( console.warn );