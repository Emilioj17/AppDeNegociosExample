import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../../store/AppContext";

export const ModificarUsuario = ({setModificar, usuarioCliqueado, setUsuarioCliqueado}) => {
    const { store, actions } = useContext(Context);
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        clave: "",
        tipo: ""
    });
    const [alertCorreo, setAlertCorreo] = useState(false);

    const HandlerCerrar = () => {
        setModificar(false);
        setUsuarioCliqueado(null);
    }

    const HandlerModificar = (event) => {
        if (!alertCorreo) {
            if (Object.values(datos).every(x => x.trim() === "")) {
                alert("No estas Modificando ningún Dato");
            } else {
                actions.editarUsuario(store.usuario.id, datos.nombre, datos.apellido, datos.correo, datos.clave, datos.tipo);
                setTimeout(() => { actions.getUsuarios() }, 1000);
                setModificar(false);
            }
        } else {
            alert("Debe haber algun dato mal ingresado...");
        }
    };

    const HandlerModificacionDatos = (event) => {
        if (event.target.name === "nombre" || event.target.name === "apellido") {
            var separateWord = event.target.value.toLowerCase().split(' ');
            for (var i = 0; i < separateWord.length; i++) {
                separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                    separateWord[i].substring(1);
            }
            setDatos({ ...datos, [event.target.name]: separateWord.join(' ') })
        } else {
            if (event.target.value === "Selecciona una opción...") {
                setDatos({ ...datos, [event.target.name]: "" })
            } else {
                setDatos({ ...datos, [event.target.name]: event.target.value })
            }
        }

        if (event.target.value === "") {
            setDatos({ ...datos, [event.target.name]: "" })
        }
    };

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

        if (event.target.value === "") {
            setDatos({ ...datos, [event.target.name]: null });
            setAlertCorreo(false);
        }
    }

    return (
        <div className="" style={{filter: "drop-shadow(0px 4px 8px #000000)"}}>
            <div className="callout" data-closable>
                <button className="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
                    <span aria-hidden="true">×</span>
                </button>
                <form className="log-in-form">
                    <h4 className="text-left">Cambia el o los Datos que deseas del Usuario</h4>
                    <label>
                            Nombre: <strong>{usuarioCliqueado.nombre}</strong>
                            <input type="text"
                                value={datos.nombre}
                                placeholder='Puedes cambiar el Nombre'
                                name="nombre" onChange={(e) => HandlerModificacionDatos(e)} />
                    </label>
                    <label>
                        Apellido: <strong>{usuarioCliqueado.apellido}</strong>
                            <input type="text"
                                value={datos.apellido}
                                placeholder='Puedes cambiar el Apellido'
                                name="apellido" onChange={(e) => HandlerModificacionDatos(e)} />
                    </label>
                    <label>
                        Email: <strong>{usuarioCliqueado.correo}</strong>
                            <input type="email"
                                value={datos.correo}
                                placeholder='Puedes cambiar el Correo'
                                name="correo" onChange={(e) => HandlerValidarCorreo(e)} />
                    </label>
                    <label>
                        Clave: <strong>************</strong>
                            <input type="password"
                                value={datos.clave}
                                placeholder='Puedes fijar una nueva clave'
                                name="clave" onChange={(e) => HandlerModificacionDatos(e)} />
                    </label>
                    <div className="">
                        <label className="form-label" htmlFor='tipo'>Tipo de Usuario: <strong>{usuarioCliqueado.tipo}</strong> </label>
                        <select className="form-select" id="tipo" name="tipo" onChange={(e)=>HandlerModificacionDatos(e)}>
                            <option>Selecciona una opción...</option>
                            <option>Administrador</option>
                            <option>Vendedor</option>
                            <option>Cobranza</option>
                            <option>Soporte</option>
                        </select>
                    </div>
                </form>
                {alertCorreo?(<div className="callout alert text-center">Correo Incorrecto</div>):null}
                <div className="button-group align-right">
                    <a className="button primary" onClick={(e)=>HandlerModificar(e)}>Modificar Usuario</a>
                </div>
            </div>
        </div>
    );
}

export default ModificarUsuario;