import React, { useState, useContext } from 'react';
import { Context } from "../../store/AppContext";
import { useHistory } from 'react-router';

//Este Formulario es de Direccion Tributaria

const FormularioClienteDt = ({ setNuevoCliente }) => {
    const HandlerCerrar = (event) => {
        setNuevoCliente(false)
    }

    return (
        <div className='row'>
            <div className="callout" data-closable>
                <button className="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
                    <span aria-hidden="true">×</span>
                </button>
                
                <div className="row">
                    <div className="columns">
                        <form className="log-in-form">
                            <h4 className="text-left">Ingresa los Datos solicitados para crear un Cliente para el Servicio</h4>
                            <label>
                                Razon Social
                                <input type="text"
                                    placeholder="Razon Social Completa"/>
                            </label>
                            <label>
                                Rut
                                <input type="text"
                                    placeholder="Rut Sin Puntos"/>
                            </label>
                            <label>
                                Correo
                                <input type="text"
                                    placeholder="Un correo Completo"/>
                            </label>
                            <label>
                                Telefono
                                <input type="text"
                                    placeholder="Un Número de Telefono"/>
                            </label>
                            <label>
                                Representante Legal
                                <input type="text"
                                    placeholder="Nombre Completo Representante Legal"/>
                            </label>
                            <label>
                                Rut Representante Legal
                                <input type="text"
                                    placeholder="Rut sin puntos"/>
                            </label>
                            <label>
                                Fecha Contratacion
                                <input type="text"
                                    placeholder="Ingresar Fecha"/>
                            </label>
                        </form>
                    </div>
                </div>

                <div className='button-group align-right'>
                    <button className="submit success button">Crear Cliente</button>
                    <button className="submit warning button">Resetar Formulario</button>
                    <button className="submit button" onClick={(e)=>HandlerCerrar(e)}>Cerrar Ventana</button>
                </div>
            </div>
        </div>
    );
}

export default FormularioClienteDt;