import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el GifGrid', () => {

    const category = 'batman';

    test('Debe de hacer match con el snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper =shallow( <GifGrid category={category}/> );

        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost.algo',
            title: 'batman loco'
        },
        {
            id: 'Asdg',
            url: 'https://localhost.algo',
            title: 'batman sad'
        }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper =shallow( <GifGrid category={category}/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
    

});
