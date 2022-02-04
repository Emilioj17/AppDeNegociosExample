import React from 'react';
import ListaClientesDtUsuarioNormal from './ListaClientesDtUsuarioNormal';


//Esta genera el listado de empresas, en función de la busqueda realizada.

const ResultadoBusqueda = ({ clienteDtBuscado }) => {

    return (
        <div className='column'>
            <ListaClientesDtUsuarioNormal
                clienteDtBuscado={clienteDtBuscado}/>
        </div>
    );
}

export default ResultadoBusqueda;