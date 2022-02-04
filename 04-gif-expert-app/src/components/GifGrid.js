import React, { useState, useEffect} from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
      getGifs();
    }, [])
    

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Batman&limit=10&api_key=7o4oshT61TLIaGK7U8x8XLXu7djzW2kF'
        
        const resp = await fetch( url ) 
        const { data } = await resp.json();
            //console.log(data);
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages( gifs );
    
    }

    //getGifs();

  return (
    <div>
        <h3>{ category }</h3>
        {
            images.map( img => (
                <GifGridItem 
                    key={ img.id }
                    //img={ img } 
                    { ...img }
                />
            ))
        }
    </div>
  )
};
