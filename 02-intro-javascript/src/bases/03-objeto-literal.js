const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 67,
    direccion: {
        ciudad: 'new york',
        zip: 765765765,
        lat: 89.865,
        lng: 76.65,
    }
};

//console.table ( { persona } );
const persona2 = { ...persona};
persona2.nombre = 'peter';

console.log( persona );
console.log( persona2 );