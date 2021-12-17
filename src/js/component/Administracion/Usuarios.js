import React, { useState } from 'react';

const Usuarios = ({ usuariosActivos, setCrear }) => {

    const DivUsuarios = () => {
        const Activos = usuariosActivos.map((usuario, index) => {
            return (
                <div className="form-check" key={index}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id={usuario[2]}/>
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

    return (
        <div className="row text-center">
            <DivUsuarios />
            <div className="row small-up-2 medium-up-3 large-up-4">
                <div className="column">
                    <a className="button primary" name="Modificar">Modificar</a>
                </div>
                <div className="column">
                    <a className="button alert" name="Borrar">Borrar</a>
                </div>
                <div className="column">
                    <a className="button primary" name="Crear" onClick={(e) => setCrear("YY")}>Crear Usuario</a>
                </div>
                </div>
            </div>
    );
}
 
export default Usuarios;