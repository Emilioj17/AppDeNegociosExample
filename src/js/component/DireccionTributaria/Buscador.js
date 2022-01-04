import React, { useState, useContext } from 'react';
import { Context } from "../../store/AppContext";
import { useHistory } from 'react-router';


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