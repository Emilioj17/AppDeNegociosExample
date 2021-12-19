import React, { useState, useContext } from 'react';
import { Context } from "../../store/AppContext";

export const Usuarios = ({ listaUsuarios, setCrear, usuarioActivo, setUsuarioActivo, setAccion }) => {
    const { store, actions } = useContext(Context);

    const DivUsuarios = () => {
        const HandlerActivo = (event) => {
            setUsuarioActivo(event.target.id)
        };

        const Activos = listaUsuarios.map((usuario, index) => {
            return (
                <div className="form-check" key={index}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id={usuario[2]} onClick={(e)=>HandlerActivo(e)}/>
                    <label className="form-check-label" htmlFor={usuario[2]}>
                        Nombre: {usuario[0]} {usuario[1]} | Tipo: {usuario[3]} | Correo: {usuario[4]}
                    </label>
                </div>
            )
        });

        return (
            <div className="row">
                <div  className="col-6 col-md-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Usuarios</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{textAlign: "left"}}>
                                    {Activos}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    const HandlerBorrar = (event) => {
        actions.deleteUsuario(usuarioActivo)
    };

    const HandlerCrear = (event) => {
        setAccion("crear");
        setCrear(true);
    };

    const HandlerModificar = (event) => {
        setAccion("modificar");
        setCrear(true);
    };

    return (
        <div className="row text-center">
            <DivUsuarios />
            <div className="row small-up-2 medium-up-3 large-up-4">
                <div className="column">
                    <a className="button primary" name="Modificar" onClick={(e) => HandlerModificar(e)}>Modificar</a>
                </div>
                <div className="column">
                    <a className="button alert" name="Borrar" onClick={(e)=>HandlerBorrar(e)}>Borrar</a>
                </div>
                <div className="column">
                    <a className="button primary" name="Crear" onClick={(e)=>HandlerCrear(e)}>Crear Usuario</a>
                </div>
                </div>
            </div>
    );
}

export default Usuarios;