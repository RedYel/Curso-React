// Desestrucuturacion
// asignacion desestructurante 

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'ironman',
    rango: 'soldado'
};

//const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const usuarioActivo = ( { clave, nombre, edad, rango = 'capitan'} ) => {
    //console.log(usuario);
    //const { nombre, edad, clave } = persona;
    //console.log( nombre, edad, rango );
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 12.314,
            lng: 12.32
        }
    }
}

const { nombreClave, anios, latlng } = usuarioActivo( persona );
const { lat, lng} = latlng;

console.log( nombreClave, anios );
console.log( lat, lng );


