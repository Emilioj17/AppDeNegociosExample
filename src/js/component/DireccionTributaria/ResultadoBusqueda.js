import React from 'react';
import Buscador from './Buscador';
import { IoReturnDownBackOutline } from "react-icons/io5";


//Esta genera el listado de empresas, en función de la busqueda realizada.

const ResultadoBusqueda = ({ clienteDtBuscado, setClienteDtBuscado }) => {
    
    const HandlerRetroceder = (event) => {
        setClienteDtBuscado(null);
    }

    return (
        <div className='column'>
            <div><a onClick={(e)=>HandlerRetroceder(e)}><h4 style={{display:"inline"}}><IoReturnDownBackOutline /></h4> Regresar</a></div>
            <Buscador setClienteDtBuscado={setClienteDtBuscado} />
            Hola {clienteDtBuscado} Si
        </div>
    );
}

export default ResultadoBusqueda;