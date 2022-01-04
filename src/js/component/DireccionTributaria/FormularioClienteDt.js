import React, { useState, useContext } from 'react';
import { Context } from "../../store/AppContext";
import { useHistory } from 'react-router';

//Este Formulario es de Direccion Tributaria

const FormularioClienteDt = ({ setNuevoCliente }) => {
    const HandlerCerrar = (event) => {
        setNuevoCliente(false)
    }

    return (
        <div className="callout" data-closable>
            <p>You can so totally close this!</p>
            <button className="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
                <span aria-hidden="true">×</span>
            </button>
        </div>
    );
}

export default FormularioClienteDt;