import React, { useState, useContext } from 'react';
import { Context } from "../../../../store/AppContext";

//Este Formulario es de Direccion Tributaria (Modificar Cliente Existente)

const ModificarClienteDt = ({setClickPagos}) => {
    const { store, actions } = useContext(Context);

    const HandlerCerrar = (event) => {
        setClickPagos(false);
    }

    return (
        <div>
            <h2>Holi</h2>
            <div className='button-group align-right'>
                    <button className="submit button">Agregar Pago</button>
                    <button className="submit button">Editar Pago</button>
                    <button className="submit button">Borrar Pago</button>
                    <button className="submit button" onClick={(e)=> HandlerCerrar(e)}>Cerrar</button>
            </div>


        </div>
    )

}

export default ModificarClienteDt;