import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../../store/AppContext";

export const ModificarUsuario = ({setModificar, usuarioCliqueado, setUsuarioCliqueado}) => {
    const { store, actions } = useContext(Context);
    const [datos, setDatos] = useState({
        nombre: null,
        apellido: null,
        correo: null,
        clave: null,
        tipo: null
    });
    const [alertPrincipal, setAlertPrincipal] = useState(false);
    const [alertCorreo, setAlertCorreo] = useState(false);

    /* useEffect(() => {
        actions.getUsuario(usuarioCliqueado.id)
    }, []); */

    const HandlerCerrar = () => {
        setModificar(false);
        setUsuarioCliqueado(null);
    }

    const HandlerModificar = (event) => {
        if (!alertCorreo) {
            actions.editarUsuario(store.usuario.id, datos.nombre, datos.apellido, datos.correo, datos.clave, datos.tipo);
            setTimeout(() => {window.location.reload()}, 1000);
        }
    };

    const HandlerModificacionDatos = (event) => {
        console.log("Escribiendo...");
        setDatos({ ...datos, [event.target.name]: event.target.value })
    };

    const FormularioModificacion = () => {
        return (
            <form className="log-in-form">
            <h4 className="text-left">Ingresa los Datos solicitados para crear un Usuario</h4>
            <label>
                Nombre
                    <input type="text"
                        defaultValue={usuarioCliqueado.nombre}
                        value={datos.nombre}
                        placeholder='Puedes cambiar el Nombre'
                        name="nombre" onChange={(e) => HandlerModificacionDatos(e)} />
            </label>
            <label>
                Apellido
                    <input type="text"
                        defaultValue={usuarioCliqueado.apellido}
                        value={datos.apellido}
                        placeholder='Puedes cambiar el Apellido'
                        name="apellido" onChange={(e) => HandlerModificacionDatos(e)} />
            </label>
            <label>
                Email
                    <input type="email"
                        defaultValue={usuarioCliqueado.correo}
                        value={datos.correo}
                        placeholder='Puedes cambiar el Correo'
                        name="correo" onChange={(e) => HandlerModificacionDatos(e)} />
            </label>
            <label>
                Clave
                    <input type="password"
                        value={datos.clave}
                        placeholder='Puedes fijar una nueva clave'
                        name="clave" onChange={(e) => HandlerModificacionDatos(e)} />
            </label>
            <div className="">
                <label className="form-label" htmlFor='tipo'>Elige Tipo de Usuario</label>
                <select className="form-select" id="tipo" defaultValue={usuarioCliqueado.tipo} name="tipo" onChange={(e)=>HandlerModificacionDatos(e)}>
                    <option>Administrador</option>
                    <option>Vendedor</option>
                    <option>Cobranza</option>
                </select>
            </div>
        </form>
        )
    }

    return (
        <div className="row" style={{filter: "drop-shadow(0px 4px 8px #000000)"}}>
            <div className="callout" data-closable>
                <button className="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
                    <span aria-hidden="true">×</span>
                </button>
                <FormularioModificacion />
                {alertPrincipal ? (<div className="callout alert text-center">Por favor, todos los datos deben ser completados</div>) : null}
                {alertCorreo?(<div className="callout alert text-center">Correo Incorrecto</div>):null}
                <div className="button-group align-right">
                    <a className="button primary" onClick={(e)=>HandlerModificar(e)}>Modificar Usuario</a>
                </div>
            </div>
        </div>
    );
}

export default ModificarUsuario;