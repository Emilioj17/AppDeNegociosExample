import React, { useState, useContext } from 'react';


const ClienteSeleccionado = ({store, clientesD, setClienteSeleccionado}) => {
    const HandlerCerrar = (event) => {
        setClienteSeleccionado(false)
    }

    return (
        <div className='row'>
            <div className="callout" data-closable>
                <button className="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
                    <span aria-hidden="true">×</span>
                </button>
                <div className='button-group align-right'>
                    <button className="submit success button" disabled>Modificar Cliente</button>
                    <button className="submit warning button" disabled>Sacar Informe</button>
                </div>
                <div className="grid-x">
                    <div className="cell small-6">
                        Hola
                    </div>
                    <div className="cell small-6">
                        Hola
                    </div>
                    <div class="cell">full width cell</div>
                </div>
            </div>
        </div>
    );
}

export default ClienteSeleccionado;