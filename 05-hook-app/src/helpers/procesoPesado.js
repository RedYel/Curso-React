import swal from 'sweetalert';

export const procesoPesado = ( iteraciones ) => {
        
    for( let i = 0; 1 < iteraciones; i++){
        // console.log('Ahi vamos...');
        swal("Alerta!!");
    }

    return `${ iteraciones } iteraciones realizadas.`;
}