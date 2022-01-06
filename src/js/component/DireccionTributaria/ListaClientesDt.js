import React, { Fragment, useState, useContext } from 'react';
import { Context } from "../../store/AppContext";
import { useHistory } from 'react-router';

const ListaClientesDt = ({ store, clientesDt, clienteDtBuscado, setClienteSeleccionado, setClienteDtCliqueado }) => {
    ///// Arreglar esto. Hay codigo que no me gusta y 1) No me permite filtrar por "secciones" de texto
    /// y 2) No me deja filtrar por mayusculas/minusculas

    const HandlerClick = (object) => {
        console.log(object);
        setClienteDtCliqueado(object);
        setClienteSeleccionado(true);
    }

    return (
        <div className='row table-scroll'>
            <table className="table hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Razon Social</th>
                        <th scope="col">Rut</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Representante Legal</th>
                        <th scope="col">Rut Representante</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Vigente</th>
                        <th scope="col">Erpyme</th>
                    </tr>
                </thead>
                <tbody>
                    {(store.clientesDt != null) ? 
                        ((clienteDtBuscado == "" || clienteDtBuscado == null) ? (
                            clientesDt.map((object, i) => 
                                <tr key={i} onClick={()=>HandlerClick(object)}>
                                    <td>{object.id}</td>
                                    <td>{object.razon}</td>
                                    <td>{object.rut}</td>
                                    <td>{object.correo}</td>
                                    <td>{object.fono}</td>
                                    <td>{object.representante}</td>
                                    <td>{object.rutRepresentante}</td>
                                    <td>{object.fechaContratacion}</td>
                                    <td>{object.vigente}</td>
                                    <td>{object.erpyme}</td>
                                </tr>)
                        ):(clientesDt.filter(
                            contact => contact.razon == clienteDtBuscado || contact.rut == clienteDtBuscado || contact.correo == clienteDtBuscado || contact.representante == clienteDtBuscado || contact.rutRepresentante == clienteDtBuscado).map((object, i) => 
                                <tr key={i} onClick={()=>HandlerClick(object)}>
                                <td>{object.id}</td>
                                <td>{object.razon}</td>
                                <td>{object.rut}</td>
                                <td>{object.correo}</td>
                                <td>{object.fono}</td>
                                <td>{object.representante}</td>
                                <td>{object.rutRepresentante}</td>
                                <td>{object.fechaContratacion}</td>
                                <td>{object.vigente}</td>
                                <td>{object.erpyme}</td>
                            </tr>)))
                    : 
                        (<td colSpan="9" style={{height:"100px", padding:"20px"}}><h2 className="text-center"> - no hay datos -</h2></td>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListaClientesDt;