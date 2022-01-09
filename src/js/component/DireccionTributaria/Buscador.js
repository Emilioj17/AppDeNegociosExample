import React from 'react';

//Aún no permite buscar correctamente. Solo permite busqueda 100% exacta.

const Buscador = ({setClienteDt}) => {
    const HandlerOnChange = (event) => {
        setClienteDt(event.target.value)
    };

    return (
        <div className='cell small-10'>
            <label htmlFor="Buscador">Buscador</label>
            <input type="text" placeholder="Ingresa tu Busqueda" name="Buscador" onChange={(e)=>HandlerOnChange(e)}/>
        </div>
    );
}

export default Buscador;