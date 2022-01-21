// Async and await

//const getImagenPromesa = () => new Promise ( resolve => resolve('https://jlghfalkhjgda.conm'))

const getImage = async() => {
    try{
    //return 'https:/lkhgljahd,vihalj';
    const apiKey = '7o4oshT61TLIaGK7U8x8XLXu7djzW2kF';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    //tengo que desestructurar la data
    const {data} = await resp.json();
    
    const { url } = data.images.original;     
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );

    console.log( data );
    }catch (error){
        //Manejo del error
        console.error(error);
    }
    
}

getImage();