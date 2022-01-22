import React from 'react';

//Esta funcion es la que genera el buscador de clientes. Es bien sencilla, el unico handler que tiene
// est para asignar lo que se escriba con un onChange.

const Buscador = ({setClienteDtBuscado, setClientesPorPagina}) => {
    const HandlerOnChange = (event) => {
        setClienteDtBuscado(event.target.value);
        setClientesPorPagina(100000);
    };

    return (
        <div className='cell small-8'>
            <label htmlFor="Buscador">Buscador</label>
            <input type="text" placeholder="Ingresa tu Busqueda" name="Buscador" onChange={(e)=>HandlerOnChange(e)}/>
        </div>
    );
}

export default Buscador;