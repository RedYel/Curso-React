import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';


describe('Pruebas en el <GifExpertApp/>', () => {

    test('Debe mostarse correctamente', () => {
        
        const wrapper = shallow( <GifExpertApp />);

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostar una lista de categorias', () => {
        
        const categories = ['one punch', 'Dragon ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    
    

});
