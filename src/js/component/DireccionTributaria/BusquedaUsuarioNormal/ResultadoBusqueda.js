import React from 'react';
import ListaClientesDtUsuarioNormal from './ListaClientesDtUsuarioNormal';


//Esta genera el listado de empresas, en función de la busqueda realizada.

const ResultadoBusqueda = ({ clienteDtBuscado, setClienteSeleccionado, setClienteDtCliqueado, filtroVigente, filtroErpyme, filtroSaldo }) => {

    return (
        <div className='column'>
            <ListaClientesDtUsuarioNormal
                clienteDtBuscado={clienteDtBuscado}
                setClienteSeleccionado={setClienteSeleccionado}
                setClienteDtCliqueado={setClienteDtCliqueado}
                filtroVigente={filtroVigente}
                filtroErpyme={filtroErpyme}
                filtroSaldo={filtroSaldo}/>
        </div>
    );
}

export default ResultadoBusqueda;