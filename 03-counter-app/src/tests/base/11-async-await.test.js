import { getImagen } from "../../base/11-async-await";

describe(' pruebas en async, await y fetch', () => {

    test(' debe de retronar el URL imagen', async () => {
      
        const url = await getImagen();
        //console.log( url );
        expect( url.includes('https://') ).toBe( true );
    });
    

})