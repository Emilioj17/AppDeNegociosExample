import React, { useState, useContext } from 'react';
import { Context } from "../../store/AppContext";
import { AiFillEdit, AiOutlineSmallDash } from "react-icons/ai";

export const ListaUsuarios = ({ setModificar, usuarioSeleccionado, setUsuarioCliqueado}) => {
    const { store, actions } = useContext(Context);

    const Clientes = () => {
        return (
            <table className={`table hover ${store.witch ? ("tablaUsuarios"):""}`}>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Tipo de Usuario</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {(store.usuarios != null) ? (
                        store.usuarios.map((objeto, i) => ListaDesplegarUsuarios(objeto, i)
                        )): null}
                </tbody>
            </table>
        )
    }

    const HandlerClick = (object) => {
        if (usuarioSeleccionado) {
            setUsuarioCliqueado(object);
            setModificar(true);
        }
    }

    const ListaDesplegarUsuarios = (objeto, i) => {
        return (
            <tr key={i}>
                <td>{objeto.id}</td>
                <td>{objeto.nombre}</td>
                <td>{objeto.apellido}</td>
                <td>{objeto.correo}</td>
                <td>{objeto.tipo}</td>
                {!usuarioSeleccionado ? (<td><a class="clear button" disabled><AiOutlineSmallDash /></a></td>) : null}
                {usuarioSeleccionado ? (<td className={usuarioSeleccionado ? "trCliqueable" : null}><a class="clear button" onClick={()=>HandlerClick(objeto)}><AiFillEdit /></a></td>):null}
            </tr>
        )
    }

    return (
        <div className="row">
           {(store.usuarios != null) ? (<Clientes />) : null}
            </div>
    );
}

export default ListaUsuarios;