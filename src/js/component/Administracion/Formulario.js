import React, { useState, useContext } from 'react';
import { Context } from "../../store/AppContext";

// Este formulario es de Administracion

const Formulario = ({ setCrear, accion, usuarioActivo }) => {
    const { store, actions } = useContext(Context);
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        clave: "",
        tipo: ""
      });

    const HandlerCancelar = (event) => {
        setCrear(false)
    };

    const HanlderCrear = (event) => {
        setCrear(false)
    };

    const HandlerModificacionDatos = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })
    };

    const HandlerModificar = (event) => {
        actions.editUsuario(usuarioActivo, datos.nombre, datos.apellido, datos.correo, datos.clave, datos.tipo);
    };

    return (
        <div className="row">
            <div className="columns">
                <form className="log-in-form">
                    <h4 className="text-left">Ingresa los Datos solicitados para crear un Usuario</h4>
                    <label>
                        Nombre
                        <input type="text" placeholder="Solo primer Nombre" value={datos.nombre} name="nombre" onChange={(e)=>HandlerModificacionDatos(e)}/>
                    </label>
                    <label>
                        Apellido
                        <input type="text" placeholder="Solo primer Apellido" value={datos.apellido} name="apellido" onChange={(e)=>HandlerModificacionDatos(e)}/>
                    </label>
                    <label>
                        Email
                        <input type="email" placeholder="correo@denegocios.cl" value={datos.correo} name="correo" onChange={(e)=>HandlerModificacionDatos(e)}/>
                    </label>
                    <label>
                        Clave
                        <input type="password" placeholder="Clave" value={datos.clave} name="clave" onChange={(e)=>HandlerModificacionDatos(e)}/>
                    </label>
                    <div className="">
                        <label className="">Elige Tipo</label>
                        <select className="" id="exampleFormControlSelect1" name="tipo" value={datos.tipo} name="tipo" onChange={(e)=>HandlerModificacionDatos(e)}>
                        <option selected>Elige una opción...</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Vendedor">Vendedor</option>
                        <option value="Cobranza">Cobranza</option>
                        </select>
                    </div>
                    <p>
                        {(accion==="crear")?(<input type="btn" className="button expanded" Value="Crear Usuario" />):null}
                        {(accion==="modificar")?(<input type="btn" className="button expanded" Value="Modificar Usuario" onClick={(e)=>HandlerModificar(e)}/>):null}
                        <input type="btn" className="button expanded alert" Value="Cancelar" onClick={(e)=>HandlerCancelar(e)}/>
                    </p>
                </form>
            </div>
        </div>
    );
}
 
export default Formulario;