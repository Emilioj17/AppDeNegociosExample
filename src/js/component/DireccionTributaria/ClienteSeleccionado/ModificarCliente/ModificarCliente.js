import React, { useState, useContext } from 'react';
import { Context } from "../../../../store/AppContext";
import { ValidarRut } from "../../../../Helper/ValidarRut";

//Este Formulario es de Direccion Tributaria (Modificar Cliente Existente)

const ModificarClienteDt = ({ setModificarCliente, clienteDtCliqueado, setDSetectorCambiosInfo }) => {
    const { store, actions } = useContext(Context);
    const [alertPrincipal, setAlertPrincipal] = useState(false);
    const [alertRut, setAlertRut] = useState(false);
    const [opcionesAdicionales, setOpcionesAdicionales] = useState(false);
    const [alertRutRepresentante, setAlertRutRepresentante] = useState(false);
    const [alertCorreo, setAlertCorreo] = useState(false);
    const [alertFono, setAlertFono] = useState(false);
    const [datos, setDatos] = useState({
        razon: "",
        rut: "",
        vigente: "",
        correo: "",
        correoSecundario: "",
        correoTerciario: "",
        fono: "",
        whatsapp: "",
        representante: "",
        rutRepresentante: "",
        fechaContratacion: "",
        erpyme: "",
        p: "",
        sacar: "",
        dicom: "",
        repetido: "",
        libre: "",
        mesesPagados: "",
        tipoPago: ""
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
            }
        }

        if (event.target.value === "") {
            setDatos({ ...datos, [event.target.name]: null });
            setAlertRut(false);
        }
    }

    const HandlerValidarCorreo = (event) => {
        const correo = event.target.value;
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (event.target.name === "correo") {
            if (correo.match(validRegex)) {
                setDatos({ ...datos, [event.target.name]: event.target.value });
                setAlertCorreo(false);
            }
            if (!correo.match(validRegex)) {
                setDatos({ ...datos, [event.target.name]: event.target.value });
                setAlertCorreo(true);
            }
        }

        if (event.target.name === "correoSecundario") {
            if (correo.match(validRegex) || correo==="") {
                setDatos({ ...datos, [event.target.name]: event.target.value });
                setAlertCorreo(false);
            }
            if (!correo.match(validRegex)) {
                setDatos({ ...datos, [event.target.name]: event.target.value });
                setAlertCorreo(true);
            }
        }

        if (event.target.name === "correoTerciario") {
            if (correo.match(validRegex) || correo==="") {
                setDatos({ ...datos, [event.target.name]: event.target.value });
                setAlertCorreo(false);
            }
            if (!correo.match(validRegex)) {
                setDatos({ ...datos, [event.target.name]: event.target.value });
                setAlertCorreo(true);
            }
        }

        if (event.target.value === "") {
            setDatos({ ...datos, [event.target.name]: null });
            setAlertCorreo(false);
        }
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
            }
        }

        if (event.target.value === "") {
            setDatos({ ...datos, [event.target.name]: null });
            setAlertFono(false);
        }
    }

    const HandlerModificarCliente = (event) => {
        if (alertRut || alertRutRepresentante || alertCorreo || alertFono) {
            setAlertPrincipal(true);
        } else {
            if (Object.values(datos).every(x => x === null)) {
                alert("No estas Modificando ningún Dato");
            } else {
                setAlertPrincipal(false);
                setDSetectorCambiosInfo(true);
                actions.editarClienteDt(clienteDtCliqueado.id, datos.razon, datos.rut, datos.vigente, datos.correo, datos.correoSecundario, datos.correoTerciario, datos.fono, datos.whatsapp, datos.representante, datos.rutRepresentante, datos.fechaContratacion, datos.erpyme, datos.p, datos.sacar, datos.dicom, datos.repetido, datos.libre, datos.mesesPagados, datos.tipoPago);
                setTimeout(() => {setModificarCliente(false)}, 500);
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
            if (event.target.value === "Selecciona una opción...") {
                setDatos({ ...datos, [event.target.name]: null })
            } else {
                setDatos({ ...datos, [event.target.name]: event.target.value })
            }
        }

        if (event.target.value === "") {
            setDatos({ ...datos, [event.target.name]: null })
        }
    };

    return (
        <div className='row' style={{filter: "drop-shadow(0px 4px 8px #000000)"}}>
            <div className="callout" data-closable>
                <button className="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
                    <span aria-hidden="true">×</span>
                </button>
                <div className="row">
                    <div className="columns">
                        <form className="log-in-form">
                            <h4 className="text-left">Vas a Modificar Informacion de <strong>{store.infoClienteDt.razon}</strong></h4>
                            <label>
                                Razon Social: <strong>{store.infoClienteDt.razon}</strong>
                                <input type="text"
                                    value={datos.razon}
                                    placeholder='Puedes cambiar la razon Social'
                                    name="razon" onChange={(e) => HandlerCompletarDatos(e)} />
                            </label>
                            <div className='grid-x grid-margin-x'>
                                <label className='cell small-6'>
                                    Rut: <strong>{store.infoClienteDt.rut}</strong>
                                    <input type="text"
                                        value={datos.rut}
                                        placeholder='Puedes cambiar el Rut de esta empresa'
                                        name="rut" onChange={(e) => HandlerValidarRut(e)} />
                                </label>
                                <label className='cell small-6'>
                                    Correo o email: <strong>{store.infoClienteDt.correo}</strong>
                                    <input type="text"
                                        name="correo" value={datos.correo}
                                        placeholder='Puedes agregar un correo principal'
                                        onChange={(e) => HandlerValidarCorreo(e)} />
                                </label>
                            </div>
                            <div className='grid-x grid-margin-x'>
                                <label className='cell small-6'>
                                    Correo Secundario: <strong>{store.infoClienteDt.correoSecundario != "" ? store.infoClienteDt.correoSecundario : "No hay correo"}</strong>
                                    <input type="text"
                                        name="correoSecundario" value={datos.correoSecundario}
                                        placeholder='Puedes agregar un correo secundario'
                                        onChange={(e) => HandlerValidarCorreo(e)} />
                                </label>
                                <label className='cell small-6'>
                                    Correo Terciario: <strong>{store.infoClienteDt.correoTerciario != "" ? store.infoClienteDt.correoTerciario : "No hay correo"}</strong>
                                    <input type="text"
                                        name="correoTerciario" value={datos.correoTerciario}
                                        placeholder='Puedes agregar un correo terciario'
                                        onChange={(e) => HandlerValidarCorreo(e)} />
                                </label>
                            </div>
                            <div className='grid-x grid-margin-x'>
                                <label className='cell small-3'>
                                    Telefono: <strong>{store.infoClienteDt.fono != "" ? store.infoClienteDt.fono : "No hay numero"}</strong>
                                    <input type="text"
                                        name="fono" value={datos.fono}
                                        placeholder='Puedes agregar un número de teléfono'
                                        onChange={(e) => HandlerValidarFono(e)} />
                                </label>
                                <label className='cell small-6'>
                                    Representante Legal: <strong>{store.infoClienteDt.representante}</strong>
                                    <input type="text"
                                        name="representante" value={datos.representante}
                                        placeholder='Puedes ingresar el Nombre del Representante Legal'
                                        onChange={(e) => HandlerCompletarDatos(e)} />
                                </label>
                                <label className='cell small-3'>
                                    Rut Rep Legal: <strong>{store.infoClienteDt.rutRepresentante}</strong>
                                    <input type="text"
                                        name="rutRepresentante" value={datos.rutRepresentante}
                                        placeholder='Puedes agregar el Rut de un representante legal'
                                        onChange={(e) => HandlerValidarRut(e)} />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="start">Fecha de Contratacion: <strong>{store.infoClienteDt.fechaContratacion}</strong></label>
                                <input type="date" id="start" min="2018-01-01" max="2025-12-31" name="fechaContratacion" onChange={(e) => HandlerCompletarDatos(e)}/>
                            </div>
                            <div className='grid-x grid-margin-x'>
                                <div className='cell small-3'>
                                    <label className="form-label" htmlFor='vigente'>Está Vigente este Cliente? <strong>{store.infoClienteDt.vigente}</strong></label>
                                    <select className="form-select" id="vigente" name="vigente" onChange={(e) => HandlerCompletarDatos(e)}>
                                        <option>Selecciona una opción...</option>
                                        <option value="Si">Vigente</option>
                                        <option value="No">No Vigente</option>
                                    </select>
                                </div>
                                <div className='cell small-3'>
                                    <label className="form-label" htmlFor='erpyme'>Ingresado en Erpyme? <strong>{store.infoClienteDt.erpyme}</strong></label>
                                    <select className="form-select" id="erpyme" name="erpyme" onChange={(e) => HandlerCompletarDatos(e)}>
                                        <option>Selecciona una opción...</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className='cell small-3'>
                                    <label className="form-label" htmlFor='whatsapp'>Ingresado en Whatsapp? <strong>{store.infoClienteDt.whatsapp}</strong></label>
                                    <select className="form-select" id="whatsapp" name="whatsapp" onChange={(e) => HandlerCompletarDatos(e)}>
                                        <option>Selecciona una opción...</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className='cell small-3'>
                                    <label className="form-label" htmlFor='tipoPago'>Tipo de pago? <strong>{store.infoClienteDt.tipoPago}</strong></label>
                                    <select className="form-select" id="tipoPago" name="tipoPago" onChange={(e) => HandlerCompletarDatos(e)}>
                                        <option>Selecciona una opción...</option>
                                        <option value="Anual">Anual</option>
                                        <option value="Mensual">Mensual</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label>
                                    Quieres agregar algún campo de busqueda Libre? <strong>{store.infoClienteDt.libre != "" ? store.infoClienteDt.libre : "No hay nada registrado"}</strong>
                                    <textarea placeholder="Ingresa Cualquier cosa" name="libre"
                                        defaultValue={store.infoClienteDt.libre}
                                        maxLength={99} onChange={(e) => HandlerCompletarDatos(e)}></textarea>
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
                                        <label className="form-label" htmlFor='p'>P? <strong>{store.infoClienteDt.p}</strong></label>
                                        <select className="form-select" id="p" name="p" onChange={(e) => HandlerCompletarDatos(e)}>
                                            <option>Selecciona una opción...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className='cell small-3'>
                                        <label className="form-label" htmlFor='sacar'>Sacar? <strong>{store.infoClienteDt.sacar}</strong></label>
                                        <select className="form-select" id="sacar" name="sacar" onChange={(e) => HandlerCompletarDatos(e)}>
                                            <option>Selecciona una opción...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className='cell small-3'>
                                        <label className="form-label" htmlFor='dicom'>Dicom? <strong>{store.infoClienteDt.dicom}</strong></label>
                                        <select className="form-select" id="dicom" name="dicom" onChange={(e) => HandlerCompletarDatos(e)}>
                                            <option>Selecciona una opción...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className='cell small-3'>
                                        <label className="form-label" htmlFor='repetido'>Repetido? <strong>{store.infoClienteDt.repetido}</strong></label>
                                        <select className="form-select" id="repetido" name="repetido" onChange={(e) => HandlerCompletarDatos(e)}>
                                            <option>Selecciona una opción...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                </div>
                            ) : null}
                        </form>
                    </div>
                </div>
                {alertPrincipal ? (<div className="callout alert text-center">Por favor, todos los datos deben ser completados</div>) : null}
                {alertRut ? (<div className="callout alert text-center">Rut Sociedad Incorrecto</div>) : null}
                {alertCorreo?(<div className="callout alert text-center">Correo Incorrecto</div>):null}
                {alertRutRepresentante ? (<div className="callout alert text-center">Rut Representante Incorrecto</div>) : null}
                {alertFono?(<div className="callout alert text-center">Telefono debe tener 9 digitos (numeros)</div>):null}
                <div className='button-group align-right'>
                    <button className="submit success button" onClick={(e)=> HandlerModificarCliente(e)}>Modificar Cliente</button>
                    <button className="submit button" onClick={(e)=>HandlerCerrar(e)}>Cerrar Ventana</button>
                </div>
            </div>
        </div>
    );
}

export default ModificarClienteDt;