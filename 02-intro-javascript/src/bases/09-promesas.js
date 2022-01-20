//Promesas
// de esta manera importo una funcion
    import { getHeroeById } from "./bases/08-imp-exp";

    // const promesa = new Promise( (resolve, reject) => {
    //     setTimeout(() => {
    //         //console.log('2 segundos despues')
    //         //tarea
    //         const heroe = getHeroeById(5);
    //         //console.log(heroe);
    //         resolve( heroe );
    //         //reject( 'No se puedo encontrar el heroe' )
    //     }, 2000);
    // });

    // promesa.then( (heroe) => {
    //     console.log('El heroe es: ', heroe);
    // })
    // .catch( err => console.warn( err ));

    const getHeroeByIdAsync = (id) => {
       return new Promise( (resolve, reject) => {
            setTimeout(() => {
                //console.log('2 segundos despues')
                //tarea
                const heroe = getHeroeById( id );
                //console.log(heroe);
                //resolve( heroe );
                //if (id <= 5){
                if (heroe){
                    resolve( heroe );                    
                }else{
                    reject('el herore no existe')
                }
                //reject( 'No se puedo encontrar el heroe' )
            }, 2000);
        });
    }
//.then( heroe => console.log('Heroe', heroe))
    getHeroeByIdAsync(3)
        .then( console.log)
        .catch( console.warn);