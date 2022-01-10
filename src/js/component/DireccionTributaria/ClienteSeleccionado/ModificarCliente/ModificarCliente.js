import React, { useState, useContext } from 'react';
import { Context } from "../../../../store/AppContext";
import { ValidarRut } from "../../../../Helper/ValidarRut";

//Este Formulario es de Direccion Tributaria (Modificar Cliente Existente)

const ModificarClienteDt = ({ setModificarCliente, clienteDtCliqueado, setDSetectorCambios }) => {
    const { store, actions } = useContext(Context);
    const [alertPrincipal, setAlertPrincipal] = useState(false);
    const [alertRut, setAlertRut] = useState(false);
    const [alertRutRepresentante, setAlertRutRepresentante] = useState(false);
    const [alertCorreo, setAlertCorreo] = useState(false);
    const [datos, setDatos] = useState({
        razon: null,
        rut: null,
        vigente: null,
        correo: null,
        correoSecundario: null,
        correoTerciario: null,
        fono: null,
        representante: null,
        rutRepresentante: null,
        fechaContratacion: null,
        erpyme: null,
      });


    const HandlerCerrar = (event) => {
        setModificarCliente(false)
    }

    const HandlerValidarRut = (event) => {
        if (event.target.name === "rutRepresentante") {
            const rut = event.target.value;
            if (ValidarRut.validaRut(rut)) {
                setDatos({ ...datos, [event.target.name]: event.target.value })
                setAlertRutRepresentante(false)
            } else {
                setAlertRutRepresentante(true);
                setDatos({ ...datos, [event.target.name]: event.target.value });
                return;
            }
        }

        if (event.target.name === "rut") {
            const rut = event.target.value;
            if (ValidarRut.validaRut(rut)) {
                setDatos({ ...datos, [event.target.name]: event.target.value })
                setAlertRut(false)
            } else {
                setAlertRut(true);
                setDatos({ ...datos, [event.target.name]: event.target.value });
                return;
            }
        }
    }

    const HandlerValidarCorreo = (event) => {
        const correo = event.target.value;
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (event.target.name === "correo") {
            if (correo.match(validRegex)) {
                setDatos({ ...datos, [event.target.name]: event.target.value });
                setAlertCorreo(false);
                return;
            }
            if (!correo.match(validRegex)) {
                setDatos({ ...datos, [event.target.name]: event.target.value });
                setAlertCorreo(true);
                return;
            }
        }

        if (event.target.name === "correoSecundario") {
            if (correo.match(validRegex) || correo==="") {
                setDatos({ ...datos, [event.target.name]: event.target.value });
                setAlertCorreo(false);
                return;
            }
            if (!correo.match(validRegex)) {
                setDatos({ ...datos, [event.target.name]: event.target.value });
                setAlertCorreo(true);
                return;
            }
        }

        if (event.target.name === "correoTerciario") {
            if (correo.match(validRegex) || correo==="") {
                setDatos({ ...datos, [event.target.name]: event.target.value });
                setAlertCorreo(false);
                return;
            }
            if (!correo.match(validRegex)) {
                setDatos({ ...datos, [event.target.name]: event.target.value });
                setAlertCorreo(true);
                return;
            }
        }
    }

    const HandlerModificarCliente = (event) => {
        actions.editarClienteDt(clienteDtCliqueado.id, datos.razon, datos.rut, datos.vigente, datos.correo, datos.correoSecundario, datos.correoTerciario, datos.fono, datos.representante, datos.rutRepresentante, datos.fechaContratacion, datos.erpyme);
        setDSetectorCambios(true);
        setTimeout(() => { setModificarCliente(false) }, 500);
    };

    const HandlerCompletarDatos = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })
    };

    return (
        <div className='row'>
            <div className="callout" data-closable>
                <button className="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
                    <span aria-hidden="true">×</span>
                </button>
                <div className="row">
                    <div className="columns">
                        <form className="log-in-form">
                            <h4 className="text-left">Vas a Modificar Informacion de <strong>{clienteDtCliqueado.razon}</strong></h4>
                            <label>
                                Razon Social
                                <input type="text"
                                    placeholder={clienteDtCliqueado.razon} value={datos.razon} name="razon" onChange={(e)=>HandlerCompletarDatos(e)}/>
                            </label>
                            <label>
                                Rut
                                <input type="text"
                                    placeholder={clienteDtCliqueado.rut} value={datos.rut} name="rut" onChange={(e) => HandlerValidarRut(e)}/>
                            </label>
                            <label>
                                Correo o email
                                <input type="text"
                                    placeholder={clienteDtCliqueado.correo} name="correo" value={datos.correo} onChange={(e) => HandlerValidarCorreo(e)}/>
                            </label>
                            <label>
                                Correo Secundario
                                <input type="text"
                                    placeholder={clienteDtCliqueado.correoSecundario} name="correoSecundario" value={datos.correoSecundario} onChange={(e) => HandlerValidarCorreo(e)}/>
                            </label>
                            <label>
                                Correo Terciario
                                <input type="text"
                                    placeholder={clienteDtCliqueado.correoTerciario} name="correoTerciario" value={datos.correoTerciario} onChange={(e) => HandlerValidarCorreo(e)}/>
                            </label>
                            <label>
                                Telefono
                                <input type="text"
                                    placeholder={clienteDtCliqueado.fono} name="fono" value={datos.fono} onChange={(e)=>HandlerCompletarDatos(e)}/>
                            </label>
                            <label>
                                Representante Legal
                                <input type="text"
                                    placeholder={clienteDtCliqueado.representante} name="representante" value={datos.representante} onChange={(e)=>HandlerCompletarDatos(e)}/>
                            </label>
                            <label>
                                Rut Representante Legal
                                <input type="text"
                                    placeholder={clienteDtCliqueado.rutRepresentante} name="rutRepresentante" value={datos.rutRepresentante} onChange={(e) => HandlerValidarRut(e)}/>
                            </label>
                            <div>
                                <label htmlFor="start">Fecha de Contratacion</label>
                                <input type="date" id="start" min="2018-01-01" max="2025-12-31" name="fechaContratacion" onChange={(e) => HandlerCompletarDatos(e)}/>
                            </div>
                            <div>
                                <label className="form-label" htmlFor='vigente'>Está Vigente este Cliente?</label>
                                <select className="form-select" id="vigente" name="vigente" onChange={(e) => HandlerCompletarDatos(e)}>
                                    <option value="true">Vigente</option>
                                    <option value="false" selected>No Vigente</option>
                                </select>
                            </div>
                            <div>
                                <label className="form-label" htmlFor='erpyme'>Ya está Ingresado en Erpyme?</label>
                                <select className="form-select" id="erpyme" name="erpyme" onChange={(e) => HandlerCompletarDatos(e)}>
                                    <option value="true">Si</option>
                                    <option value="false" selected>No</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                {alertPrincipal ? (<div className="callout alert text-center">Por favor, todos los datos deben ser completados</div>) : null}
                {alertRut ? (<div className="callout alert text-center">Rut Sociedad Incorrecto</div>) : null}
                {alertCorreo?(<div className="callout alert text-center">Correo Incorrecto</div>):null}
                {alertRutRepresentante?(<div className="callout alert text-center">Rut Representante Incorrecto</div>):null}
                <div className='button-group align-right'>
                    <button className="submit success button" onClick={(e)=> HandlerModificarCliente(e)}>Modificar Cliente</button>
                    <button className="submit button" onClick={(e)=>HandlerCerrar(e)}>Cerrar Ventana</button>
                </div>
            </div>
        </div>
    );
}

export default ModificarClienteDt;