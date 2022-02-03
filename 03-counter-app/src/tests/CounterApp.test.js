
import React from 'react';
import { shallow } from 'enzyme'

import CounterApp from '../CounterApp';

describe('Pruebas en el CounterApp', () => {

    let wrapper = shallow( <CounterApp/>);

    beforeEach( () => {
        wrapper = shallow( <CounterApp/>);
    });

    test('Debe mostar counterApp correctamente', () => {
    
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar un valor de 100 por defecto', () => {
      
        const wrapper = shallow( <CounterApp value={ 100 } />);
        
        const  counterText = wrapper.find('p').text().trim();
        
        expect( counterText ).toBe('100');
        //console.log(counterText)
    });
    
    test('Debe incrementar el contador', () => {
      
        wrapper.find('button').at(0).simulate('click');

        const  counterText = wrapper.find('p').text().trim();
        //console.log(counterText)
        expect( counterText ).toBe('11');
    });

    test('Debe decrementar el contador', () => {
      
        wrapper.find('button').at(2).simulate('click');
        const  counterText = wrapper.find('p').text().trim();
        //console.log(counterText)
        expect( counterText ).toBe('9');
    });
    
    test('Debe de colocar el valor por defecto con el btn reset', () => {
      
        const wrapper = shallow(<CounterApp value={ 105 }/>);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');

        wrapper.find('button').at(1).simulate('click');

        const  counterText = wrapper.find('p').text().trim();
        //console.log(counterText)

        expect( counterText ).toBe( '105' );
    });
    

});
