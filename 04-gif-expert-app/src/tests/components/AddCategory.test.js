import { shallow } from 'enzyme';
import React from 'react';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en AddCateegory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    });

    test('Debe mostarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } } );
        expect(wrapper.find('p').text().trim()).toBe( value );
    });
    
    test('No debe postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Tarea';
        const texto = wrapper.find('input').prop('value');

        //1. simular el inputchange
        input.simulate('change', {target: { value } } );
        //2. simular el submit del formulario
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        //3. se debe de haber llamado el setCategories una vez al menos
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        //4. el valor del input debe de estar vacio
        expect( texto ).toBe( '' );
        
    });
    
})