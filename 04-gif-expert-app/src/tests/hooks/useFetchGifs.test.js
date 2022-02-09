import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en useFetchGifs', () => {

    test('Debe retornar el estado inical', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'batman' ) );
        const { data, loading} = result.current;
        
        //console.log(resp);
        //const {data, loading} = useFetchGifs( 'batman' );
        await waitForNextUpdate();
        //console.log( data, loading);
        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();
    });

    test('Debe retornar un arreglo de imagenes', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'batman' ) );
        await waitForNextUpdate();
        const { data, loading} = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBeFalsy();
    });
    

});
