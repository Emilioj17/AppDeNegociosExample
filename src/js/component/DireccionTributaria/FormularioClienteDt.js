import React, { useState, useContext } from 'react';
import { Context } from "../../store/AppContext";
import { ValidarRut } from "../../Helper/ValidarRut";

//Este Formulario es de Direccion Tributaria (Crear un Nuevo Cliente)

const FormularioClienteDt = ({ setNuevoCliente }) => {
    const { store, actions } = useContext(Context);
    const [correoAdicional, setCorreoAdicional] = useState(false);
    const [opcionesAdicionales, setOpcionesAdicionales] = useState(false);
    const [alertPrincipal, setAlertPrincipal] = useState(false);
    const [alertRut, setAlertRut] = useState(false);
    const [alertRutRepresentante, setAlertRutRepresentante] = useState(false);
    const [alertCorreo, setAlertCorreo] = useState(false);
    const [alertFono, setAlertFono] = useState(false);
    const [datos, setDatos] = useState({
        razon: "",
        rut: "",
        vigente: "Si",
        correo: "",
        correoSecundario: "",
        correoTerciario: "",
        fono: "",
        whatsapp: "No",
        representante: "",
        rutRepresentante: "",
        fechaContratacion: "",
        erpyme: "No",
        p: "No",
        sacar: "No",
        dicom: "No",
        repetido: "No",
        libre: "",
        mesesPagados:"0",
        tipoPago: "Mensual"

      });


    const HandlerCerrar = (event) => {
        setNuevoCliente(false)
    }

    const HandlerValidarFono = (event) => {
        const validRegex = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g;
        if (event.target.name === "fono") {
            const fono = event.target.value;
            if (fono.match(validRegex)) {
                if (fono.length === 9) {
                    setDatos({ ...datos, [event.target.name]: event.target.value })
                    setAlertFono(false)
                }
                else {
                    setDatos({ ...datos, [event.target.name]: event.target.value })
                    setAlertFono(true)
                }
            } else {
                setAlertFono(true);
                setDatos({ ...datos, [event.target.name]: event.target.value });
                return;
            }
        }
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

    const HandlerCrearNuevoCliente = (event) => {
        if (datos.razon.trim() === "" || datos.rut.trim() === "" || datos.representante.trim() === "" || datos.rutRepresentante.trim() === ""
            || datos.fechaContratacion.trim() === "" || datos.correo.trim() === "") {
            setAlertPrincipal(true);
        } else {
            if (alertRut || alertRutRepresentante || alertCorreo || alertFono) {
                setAlertPrincipal(true);
            } else {
                setAlertPrincipal(false);
                actions.crearClienteDt(datos.razon, datos.rut, datos.vigente, datos.correo, datos.correoSecundario, datos.correoTerciario, datos.fono, datos.whatsapp, datos.representante, datos.rutRepresentante, datos.fechaContratacion, datos.erpyme, datos.p, datos.sacar, datos.dicom, datos.repetido, datos.libre, datos.mesesPagados, datos.tipoPago);
                setTimeout(() => {window.location.reload()}, 1000);
            }
        }
        
    };

    const HandlerCompletarDatos = (event) => {
        if (event.target.name === "razon" || event.target.name === "representante") {
            var separateWord = event.target.value.toLowerCase().split(' ');
            for (var i = 0; i < separateWord.length; i++) {
                separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                    separateWord[i].substring(1);
            }
            setDatos({ ...datos, [event.target.name]: separateWord.join(' ') })
        } else {
            setDatos({ ...datos, [event.target.name]: (event.target.value) })
        }
    }

    return (
        <div className='row no-print' style={{filter: "drop-shadow(0px 4px 8px #000000)"}}>
            <div className="callout" data-closable>
                <button className="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
                    <span aria-hidden="true">×</span>
                </button>
                <div className="row">
                    {/* Aquí hay un valor que no se solicita, que es el de Vigente. Por default= Si. De igual forma hay
                    otras opciones al momento de crear el cliente que tienen default */}
                    <div className="columns">
                        <form className="log-in-form">
                            <h4 className="text-left">Ingresa los Datos solicitados para crear un Cliente para el Servicio</h4>
                            <label>
                                Razon Social<span style={{color:"red"}}>*</span>
                                <input type="text"
                                    placeholder="Razon Social Completa" name="razon" onChange={(e)=>HandlerCompletarDatos(e)}/>
                            </label>
                            <div className='grid-x grid-margin-x'>
                                <label className='cell small-6'>
                                    Rut<span style={{color:"red"}}>*</span>
                                    <input type="text"
                                        placeholder="Rut Sin Puntos" name="rut" onChange={(e) => HandlerValidarRut(e)}/>
                                </label>
                                <label className='cell small-6'>
                                    Correo o email<span style={{color:"red"}}>*</span>
                                    <input type="text"
                                        placeholder="Un correo email Completo" name="correo" onChange={(e) => HandlerValidarCorreo(e)}/>
                                </label>
                            </div>
                            <div>
                                <label>Deseas agregar Correos Adionales?</label>
                                <input type="radio" id="html" name="fav_language" value="No" onClick={()=>setCorreoAdicional(false)}/>
                                <label htmlFor="html">No</label>
                                <input type="radio" id="html" name="fav_language" value="Si" onClick={()=>setCorreoAdicional(true)}/>
                                <label htmlFor="html">Si</label>
                            </div>
                            {correoAdicional ? (
                                <div className='card-divider grid-x grid-margin-x'>
                                    <label className='cell small-6'>
                                        Correo Secundario
                                        <input type="text"
                                            placeholder="Un correo email Completo" name="correoSecundario" onChange={(e) => HandlerValidarCorreo(e)}/>
                                    </label>
                                    <label className='cell small-6'>
                                        Correo Terciario
                                        <input type="text"
                                            placeholder="Un correo email Completo" name="correoTerciario" onChange={(e) => HandlerValidarCorreo(e)}/>
                                        </label>
                                </div>
                            ): null}
                            <div className='grid-x grid-margin-x'>
                                <label className='cell small-3'>
                                    Telefono
                                    <input type="text"
                                        placeholder="Un Número de Telefono" pattern="[0-9]{9}" name="fono" onChange={(e)=>HandlerValidarFono(e)}/>
                                </label>
                                <label className='cell small-6'>
                                    Representante Legal<span style={{color:"red"}}>*</span>
                                    <input type="text"
                                        placeholder="Nombre Completo Representante Legal" name="representante" onChange={(e)=>HandlerCompletarDatos(e)}/>
                                </label>
                                <label className='cell small-3'>
                                    Rut Representante Legal<span style={{color:"red"}}>*</span>
                                    <input type="text"
                                        placeholder="Rut sin puntos y con Guión" name="rutRepresentante" onChange={(e) => HandlerValidarRut(e)}/>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="start">Fecha de Contratacion<span style={{color:"red"}}>*</span></label>
                                <input type="date" id="start" min="2018-01-01" max="2025-12-31" name="fechaContratacion" onChange={(e) => HandlerCompletarDatos(e)}/>
                            </div>
                            <div className='grid-x grid-margin-x'>
                                <div className='cell small-4'>
                                    <label className="form-label" htmlFor='erpyme'>Ya está Ingresado en Erpyme?</label>
                                    <select className="form-select" id="erpyme" name="erpyme" onChange={(e) => HandlerCompletarDatos(e)}>
                                        <option value="No">No</option>
                                        <option value="Si">Si</option>
                                    </select>
                                </div>
                                <div className='cell small-4'>
                                    <label className="form-label" htmlFor='whatsapp'>Ya está Ingresado en Whatsapp?</label>
                                    <select className="form-select" id="whatsapp" name="whatsapp" onChange={(e) => HandlerCompletarDatos(e)}>
                                        <option value="No">No</option>
                                        <option value="Si">Si</option>
                                    </select>
                                </div>
                                <div className='cell small-4'>
                                    <label className="form-label" htmlFor='tipoPago'>Que tipo de pago tendrá?</label>
                                    <select className="form-select" id="tipoPago" name="tipoPago" onChange={(e) => HandlerCompletarDatos(e)}>
                                        <option value="Mensual">Mensual</option>
                                        <option value="Anual">Anual</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label>
                                    Quieres agregar algún campo de busqueda Libre?
                                <textarea placeholder="Ingresa Cualquier cosa" name="libre" maxLength={99} onChange={(e)=>HandlerCompletarDatos(e)}></textarea>
                                </label>
                            </div>
                            <div>
                                <label>Deseas ver Otras Opciones?</label>
                                <input type="radio" id="html" name="fav_language" value="No" onClick={()=>setOpcionesAdicionales(false)}/>
                                <label htmlFor="html">No</label>
                                <input type="radio" id="html" name="fav_language" value="Si" onClick={()=>setOpcionesAdicionales(true)}/>
                                <label htmlFor="html">Si</label>
                            </div>
                            {opcionesAdicionales ? (
                                <div className='card-divider grid-x grid-margin-x'>
                                    <div className='cell small-3'>
                                        <label className="form-label" htmlFor='p'>P?</label>
                                        <select className="form-select" id="p" name="p" onChange={(e) => HandlerCompletarDatos(e)}>
                                            <option value="No">No</option>
                                            <option value="Si">Si</option>
                                        </select>
                                    </div>
                                    <div className='cell small-3'>
                                        <label className="form-label" htmlFor='sacar'>Sacar?</label>
                                        <select className="form-select" id="sacar" name="sacar" onChange={(e) => HandlerCompletarDatos(e)}>
                                            <option value="No">No</option>
                                            <option value="Si">Si</option>
                                        </select>
                                    </div>
                                    <div className='cell small-3'>
                                        <label className="form-label" htmlFor='dicom'>Dicom?</label>
                                        <select className="form-select" id="dicom" name="dicom" onChange={(e) => HandlerCompletarDatos(e)}>
                                            <option value="No">No</option>
                                            <option value="Si">Si</option>
                                        </select>
                                    </div>
                                    <div className='cell small-3'>
                                        <label className="form-label" htmlFor='repetido'>Repetido?</label>
                                        <select className="form-select" id="repetido" name="repetido" onChange={(e) => HandlerCompletarDatos(e)}>
                                            <option value="No">No</option>
                                            <option value="Si">Si</option>
                                        </select>
                                    </div>
                                </div>
                            ) : null}
                            <br />
                        </form>
                    </div>
                </div>
                {alertPrincipal ? (<div className="callout alert text-center">Por favor, todos los datos deben ser completados</div>) : null}
                {alertRut ? (<div className="callout alert text-center">Rut Sociedad Incorrecto</div>) : null}
                {alertCorreo?(<div className="callout alert text-center">Correo Incorrecto</div>):null}
                {alertRutRepresentante ? (<div className="callout alert text-center">Rut Representante Incorrecto</div>) : null}
                {alertFono?(<div className="callout alert text-center">Telefono debe tener 9 digitos (numeros)</div>):null}
                <div className='button-group align-right'>
                    <button className="submit success button" onClick={(e)=> HandlerCrearNuevoCliente(e)}>Crear Cliente</button>
                    <button className="submit button" onClick={(e)=>HandlerCerrar(e)}>Cerrar Ventana</button>
                </div>
            </div>
        </div>
    );
}

export default FormularioClienteDt;