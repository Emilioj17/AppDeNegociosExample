import React, { useState, useContext } from 'react';
import { Context } from "../../store/AppContext";
import { useHistory } from 'react-router';

// Este formulario es de Administracion

const Formulario = ({ setCrear, accion, usuarioActivo, usuarios }) => {
    const { store, actions } = useContext(Context);
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        clave: "",
        tipo: ""
    });
    let history = useHistory();

    const HandlerCancelar = (event) => {
        setCrear(false)
    };

    const HandlerCrear = (event) => {
        actions.crearUsuario(datos.nombre, datos.apellido, datos.correo, datos.clave, datos.tipo);
        //history.push("/Administracion");
        setTimeout(() => {window.location.reload()}, 1000);
        //setCrear(false)
    };

    const HandlerModificacionDatos = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })
    };

    const HandlerModificar = (event) => {
        actions.editarUsuario(usuarioActivo, datos.nombre, datos.apellido, datos.correo, datos.clave, datos.tipo);
        //history.push("/");
        setTimeout(() => {window.location.reload()}, 1000);
    };

    let nombre = "";
    let apellido = "";
    let correo = "";
    let clave = "";
    let tipo = "";

    if (accion === "modificar") {
        for (let x = 0; x < usuarios.length; x++) {
            if (usuarios[x].id == usuarioActivo) {
                nombre = usuarios[x].nombre;
                apellido = usuarios[x].apellido;
                correo = usuarios[x].correo;
                clave = usuarios[x].clave;
                tipo = usuarios[x].tipo;
            }
        }
        console.log(tipo);
    }

    return (
        <div className="row">
            <div className="columns">
                <form className="log-in-form">
                    <h4 className="text-left">Ingresa los Datos solicitados para {(accion==="crear")?"crear":"modificar"} un Usuario</h4>
                    <label>
                        Nombre
                        <input type="text"
                            placeholder={(accion==="modificar")?(nombre):"Solo primer Nombre"}
                            value={datos.nombre} name="nombre" onChange={(e) => HandlerModificacionDatos(e)} />
                    </label>
                    <label>
                        Apellido
                        <input type="text"
                            placeholder={(accion==="modificar")?(apellido):"Solo primer Apellido"}
                            value={datos.apellido} name="apellido" onChange={(e) => HandlerModificacionDatos(e)} />
                    </label>
                    <label>
                        Email
                        <input type="email"
                            placeholder={(accion==="modificar")?(correo):"correo@denegocios.cl"}
                            value={datos.correo} name="correo" onChange={(e) => HandlerModificacionDatos(e)} />
                    </label>
                    <label>
                        Clave
                        <input type="password"
                            placeholder={(accion==="modificar")?(clave):"Clave"}
                            value={datos.clave} name="clave" onChange={(e) => HandlerModificacionDatos(e)} />
                    </label>
                    <div className="">
                        <label className="form-label" htmlFor='tipo'>Elige Tipo de Usuario</label>
                        <select className="form-select" id="tipo" placeholder={tipo} name="tipo" onChange={(e)=>HandlerModificacionDatos(e)}>
                            <option selected={(tipo === "Administrador") ? "selected" : ""}>Administrador</option>
                            <option selected={(tipo === "Vendedor") ? "selected" : ""}>Vendedor</option>
                            <option selected={(tipo === "Cobranza") ? "selected" : ""}>Cobranza</option>
                        </select>
                    </div>
                    <p>
                        {(accion==="crear")?(<input type="btn" className="button expanded" Value="Crear Usuario" onClick={(e)=>HandlerCrear(e)}/>):null}
                        {(accion==="modificar")?(<input type="btn" className="button expanded" Value="Modificar Usuario" onClick={(e)=>HandlerModificar(e)}/>):null}
                        <input type="btn" className="button expanded alert" Value="Cancelar" onClick={(e)=>HandlerCancelar(e)}/>
                    </p>
                </form>
            </div>
        </div>
    );
}
 
export default Formulario;