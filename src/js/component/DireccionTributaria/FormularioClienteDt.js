import React, { useState, useContext } from 'react';
import { Context } from "../../store/AppContext";
import { ValidarRut } from "../../Helper/ValidarRut";

//Este Formulario es de Direccion Tributaria (Crear un Nuevo Cliente)

const FormularioClienteDt = ({ setNuevoCliente }) => {
    const { store, actions } = useContext(Context);
    const [correoAdicional, setCorreoAdicional] = useState(false);
    const [alertPrincipal, setAlertPrincipal] = useState(false);
    const [alertRut, setAlertRut] = useState(false);
    const [alertRutRepresentante, setAlertRutRepresentante] = useState(false);
    const [alertCorreo, setAlertCorreo] = useState(false);
    const [datos, setDatos] = useState({
        razon: "",
        rut: "",
        vigente: "true",
        correo: "",
        correoSecundario: "",
        correoTerciario: "",
        fono: "",
        representante: "",
        rutRepresentante: "",
        fechaContratacion: "",
        erpyme: "false",
      });


    const HandlerCerrar = (event) => {
        setNuevoCliente(false)
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
        if (correo.match(validRegex)) {
            setAlertCorreo(false);
            if (event.target.name === "correo") {
                setDatos({ ...datos, [event.target.name]: event.target.value })
                return;
            }

            if (event.target.name === "correoSecundario") {
                setDatos({ ...datos, [event.target.name]: event.target.value })
                return;
            }

            if (event.target.name === "correoTerciario") {
                setDatos({ ...datos, [event.target.name]: event.target.value })
                return;
            }
        } else {
            setAlertCorreo(true);
            if (event.target.name === "correo") {
                setDatos({ ...datos, [event.target.name]: event.target.value })
                return;
            }

            if (event.target.name === "correoSecundario") {
                setDatos({ ...datos, [event.target.name]: event.target.value })
                return;
            }

            if (event.target.name === "correoTerciario") {
                setDatos({ ...datos, [event.target.name]: event.target.value })
                return;
            }
        }
    }

    const HandlerReset = () => {
        setDatos({
            razon: "",
            rut: "",
            correo: "",
            correoSecundario: "",
            correoTerciario: "",
            fono: "",
            representante: "",
            rutRepresentante: "",
            fechaContratacion: "",
            erpyme: ""
        });
    }

    const HandlerCrearNuevoCliente = (event) => {
        if (datos.razon.trim() === "" || datos.rut.trim() === "" || datos.representante.trim() === "" || datos.rutRepresentante.trim() === ""
            || datos.fechaContratacion.trim() === "" || datos.erpyme.trim() === "" || datos.correo.trim() === "" || datos.fono.trim() === "") {
            setAlertPrincipal(true);
        } else if(alertRut || alertRutRepresentante || alertCorreo){
            setAlertPrincipal(true);
        }else {
            setAlertPrincipal(false);
            actions.crearClienteDt(datos.razon, datos.rut, datos.correo, datos.fono, datos.representante, datos.rutRepresentante, datos.fechaContratacion, datos.erpyme);
            setTimeout(() => {window.location.reload()}, 1000);
        }
        
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
                    {/* Aquí hay un valor que no se solicita, que es el de Vigente. Por default= true */}
                    <div className="columns">
                        <form className="log-in-form">
                            <h4 className="text-left">Ingresa los Datos solicitados para crear un Cliente para el Servicio</h4>
                            {alertPrincipal ? (<div className="callout alert text-center">Por favor, todos los datos deben ser completados</div>) : null}
                            {alertRut ? (<div className="callout alert text-center">Rut Sociedad Incorrecto</div>) : null}
                            {alertCorreo?(<div className="callout alert text-center">Correo Incorrecto</div>):null}
                            {alertRutRepresentante?(<div className="callout alert text-center">Rut Representante Incorrecto</div>):null}
                            <label>
                                Razon Social
                                <input type="text"
                                    placeholder="Razon Social Completa" value={datos.razon} name="razon" onChange={(e)=>HandlerCompletarDatos(e)}/>
                            </label>
                            <label>
                                Rut
                                <input type="text"
                                    placeholder="Rut Sin Puntos" value={datos.rut} name="rut" onChange={(e) => HandlerValidarRut(e)}/>
                            </label>
                            <label>
                                Correo o email
                                <input type="text"
                                    placeholder="Un correo email Completo" name="correo" value={datos.correo} onChange={(e) => HandlerValidarCorreo(e)}/>
                            </label>
                            <div>
                                <label>Deseas agregar Correos Adionales?</label>
                                <input type="radio" id="html" name="fav_language" value="No" onClick={()=>setCorreoAdicional(false)}/>
                                <label htmlFor="html">No</label>
                                <input type="radio" id="html" name="fav_language" value="Si" onClick={()=>setCorreoAdicional(true)}/>
                                <label htmlFor="html">Si</label>
                            </div>
                            {correoAdicional ? (
                                <div className='card-divider'>
                                    <label>
                                        Correo Secundario
                                        <input type="text"
                                            placeholder="Un correo email Completo" name="correoSecundario" value={datos.correoSecundario} onChange={(e) => HandlerValidarCorreo(e)}/>
                                    </label>
                                    <label>
                                        Correo Terciario
                                        <input type="text"
                                            placeholder="Un correo email Completo" name="correoTerciario" value={datos.correoTerciario} onChange={(e) => HandlerValidarCorreo(e)}/>
                                        </label>
                                </div>
                            ): null}
                            
                            <label>
                                Telefono
                                <input type="text"
                                    placeholder="Un Número de Telefono" name="fono" value={datos.fono} onChange={(e)=>HandlerCompletarDatos(e)}/>
                            </label>
                            <label>
                                Representante Legal
                                <input type="text"
                                    placeholder="Nombre Completo Representante Legal" name="representante" value={datos.representante} onChange={(e)=>HandlerCompletarDatos(e)}/>
                            </label>
                            <label>
                                Rut Representante Legal
                                <input type="text"
                                    placeholder="Rut sin puntos y con Guión" name="rutRepresentante" value={datos.rutRepresentante} onChange={(e) => HandlerValidarRut(e)}/>
                            </label>
                            <div>
                                <label htmlFor="start">Fecha de Contratacion</label>
                                <input type="date" id="start" min="2018-01-01" max="2025-12-31" name="fechaContratacion" onChange={(e) => HandlerCompletarDatos(e)}/>
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
                <div className='button-group align-right'>
                    <button className="submit success button" onClick={(e)=> HandlerCrearNuevoCliente(e)}>Crear Cliente</button>
                    <button className="submit warning button" onClick={(e)=> HandlerReset(e)} >Resetar Formulario</button>
                    <button className="submit button" onClick={(e)=>HandlerCerrar(e)}>Cerrar Ventana</button>
                </div>
            </div>
        </div>
    );
}

export default FormularioClienteDt;