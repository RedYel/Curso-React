// funciones en JS 
// es mejor no trabajar con funciones de esa manera es mejor como constantes
//function saludar( nombre ){
//    return `Hola, ${ nombre}`;
//}
// const saludar = function ( nombre ){
//     return `Hola, ${ nombre}`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = () => `Hola New York`;

//console.log( saludar('Goku'))
console.log( saludar2('lele') );
console.log( saludar3('quinter') );
console.log( saludar4() );

const getUser = () => ({
    uid: 'abc123',
    username: 'El_varto'
});
console.log( getUser() );

//Tarea
//1. tranformar la funcion en una funcion de flecha
//2. tiene que retornar un objeto implicito
//3. probar
const getUsuarioActivo = ( nombre, correo ) => 
    ({
        uid: 'asd123',
        username: nombre,
        mail: correo
    });

const usuarioActivo = getUsuarioActivo('LeyderQuintero','lele.quinter@gmail.com');
console.log( usuarioActivo );