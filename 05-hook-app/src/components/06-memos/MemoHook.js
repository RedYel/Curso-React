import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter( 10 );
    const [show, setShow] = useState(true);

    // const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

  return (
    <>
        <h1>MemoHook</h1>
        <h3> Counter: <small> { counter } </small> </h3> 
        <hr/>

        {/* <p>{ memoProcesoPesado( counter ) }</p> */}

        <button 
            onClick={ increment } 
            className="btn btn-outline-primary me-3"
        >
            increment
        </button>

        <button
            onClick={ () => {
                setShow( !show );
            } }
            className="btn btn-outline-danger"
        >
            Show/Hide { JSON.stringify( show ) }
        </button>
    </>
  )
}
