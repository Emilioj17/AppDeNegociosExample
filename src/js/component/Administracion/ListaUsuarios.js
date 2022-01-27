import React, { useState, useContext } from 'react';
import { Context } from "../../store/AppContext";

export const ListaUsuarios = () => {
    const { store, actions } = useContext(Context);

    const Clientes = () => {
        return (
            <table className='table hover tablaUsuarios'>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Tipo de Usuario</th>
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

    const ListaDesplegarUsuarios = (objeto, i) => {
        return (
            <tr key={i}>
                <td>{objeto.id}</td>
                <td>{objeto.nombre}</td>
                <td>{objeto.apellido}</td>
                <td>{objeto.correo}</td>
                <td>{objeto.tipo}</td>
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