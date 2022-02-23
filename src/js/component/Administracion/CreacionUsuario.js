import React, { useState, useContext } from 'react';
import { Context } from "../../store/AppContext";

// Este formulario es de Administracion

const CreacionUsuario = ({ setCrear }) => {
    const { store, actions } = useContext(Context);
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        clave: "",
        tipo: "Vendedor"
    });
    const [alertPrincipal, setAlertPrincipal] = useState(false);
    const [alertCorreo, setAlertCorreo] = useState(false);

    const HandlerCerrar = (event) => {
        setCrear(false)
    };

    const HandlerCrear = (event) => {
        if (datos.nombre.trim() === "" || datos.apellido.trim() === "" || datos.correo.trim() === "" || datos.clave.trim() === ""
            || datos.tipo.trim() === "" || datos.nombre === null || datos.apellido === null || datos.correo === null || datos.clave === null
            || datos.tipo === null) {
            setAlertPrincipal(true);
        } else {
            if (alertCorreo) {
                setAlertPrincipal(true);
            }
            if (!alertCorreo) {
                actions.crearUsuario(datos.nombre, datos.apellido, datos.correo, datos.clave, datos.tipo);
                setTimeout(() => { actions.getUsuarios() }, 1000);
                setCrear(false);
            }
        }
    };

    const HandlerModificacionDatos = (event) => {
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

        setDatos({ ...datos, [event.target.name]: event.target.value })
    };

    return (
        <div className="" style={{filter: "drop-shadow(0px 4px 8px #000000)"}}>
            <div className="callout" data-closable>
                <button className="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
                    <span aria-hidden="true">×</span>
                </button>
                <form className="log-in-form">
                    <h4 className="text-left">Ingresa los Datos solicitados para crear un Usuario</h4>
                    <label>
                        Nombre
                        <input type="text"
                            value={datos.nombre} name="nombre" onChange={(e) => HandlerModificacionDatos(e)} />
                    </label>
                    <label>
                        Apellido
                        <input type="text"
                            value={datos.apellido} name="apellido" onChange={(e) => HandlerModificacionDatos(e)} />
                    </label>
                    <label>
                        Email
                        <input type="email"
                            value={datos.correo} name="correo" onChange={(e) => HandlerModificacionDatos(e)} />
                    </label>
                    <label>
                        Clave
                        <input type="password"
                            value={datos.clave} name="clave" onChange={(e) => HandlerModificacionDatos(e)} />
                    </label>
                    <div className="">
                        <label className="form-label" htmlFor='tipo'>Elige Tipo de Usuario</label>
                        <select className="form-select" id="tipo" name="tipo" onChange={(e)=>HandlerModificacionDatos(e)}>
                            <option>Vendedor</option>
                            <option>Administrador</option>
                            <option>Cobranza</option>
                            <option>Soporte</option>
                        </select>
                    </div>
                </form>
                {alertPrincipal ? (<div className="callout alert text-center">Por favor, todos los datos deben ser completados</div>) : null}
                {alertCorreo?(<div className="callout alert text-center">Correo Incorrecto</div>):null}
                <div className="button-group align-right">
                    <a className="button primary" onClick={(e)=>HandlerCrear(e)}>Crear Usuario</a>
                </div>
            </div>
        </div>
    );
}
 
export default CreacionUsuario;