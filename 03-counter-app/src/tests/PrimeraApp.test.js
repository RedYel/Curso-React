import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import PrimeraApp from "../PrimeraApp";

describe(' Pruebas en primera App', () => {
  
    // test(' debe de mostrar el mensaje de holi ', () => {
    //    const saludo = 'Hola soy lele';

    //    const { getByText } = render( <PrimeraApp saludo={ saludo }/> )

    //    expect( getByText(saludo) ).toBeInTheDocument();
    // });
    test(' Debe de mostrar <primeraApp/> correctamente', () => {
        
        const saludo = 'Hola, soy lele';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } />);

        expect( wrapper ).toMatchSnapshot();

    });
    
    test(' Debe de mostrar ell subtitulo enviado por props', () => {
      
        const saludo = 'Hola soy lele';
        const subtitulo= 'el subtitulo'
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={subtitulo}
            /> 
        );

        const textoParrafo = wrapper.find('p').text();
        console.log( textoParrafo );

        expect(  textoParrafo ).toBe( subtitulo );
    });
    
    
});
