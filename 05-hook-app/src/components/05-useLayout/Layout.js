import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const Layout = () => {

    const { counter, increment} = useCounter(1)

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote } = !!data && data[0];
    // console.log(author, quote);

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
      //console.log( pTag.current.getBoundingClientRect());
      setBoxSize( pTag.current.getBoundingClientRect() );
    }, [ quote ])

  return (
    <div>
        <h1>BreakingBad Quotes: </h1>
        <hr/>

            <figure className="text-end">
                <blockquote className="blockquote">
                    <p 
                        ref={ pTag } 
                        className="display-6"
                    > 
                        { quote } 
                    </p>
                </blockquote>
            </figure>

        <pre>
            { JSON.stringify(boxSize, null, 3) }
        </pre>

        <button 
            className="btn btn-primary"
            onClick={ increment }
        >
            Next quote
        </button>

    </div>
  )
}
