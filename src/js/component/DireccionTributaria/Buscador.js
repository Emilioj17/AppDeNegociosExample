import React from 'react';

const Buscador = ({setClienteDtBuscado}) => {
    const HandlerOnChange = (event) => {
        setClienteDtBuscado(event.target.value)
    };

    return (
        <div className='cell small-10'>
            <label htmlFor="Buscador">Buscador</label>
            <input type="text" placeholder="Ingresa tu Busqueda" name="Buscador" onChange={(e)=>HandlerOnChange(e)}/>
        </div>
    );
}

export default Buscador;