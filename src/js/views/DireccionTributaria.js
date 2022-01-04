import React, { Fragment, useContext, useState, useEffect } from 'react';
import Head from "../component/Head";
import { Context } from "../../js/store/AppContext";
import Buscador from "../component/DireccionTributaria/Buscador";

const DireccionTributaria = () => {
    //const [clientesDt, setClientesDt] = useState({});
    const { store, actions } = useContext(Context);
    const { clientesDt } = store;
    const titulosHead = ["Bienvenido al Servicio de Direccion Tributaria", "Consulta información respecto a Clientes con este servicio contratado."];

    useEffect(() => {
        actions.getClientesDt();
    }, []);
    
    const HandlerClick = () => {
        console.log(store.clientesDt);
    }

    return (
        <Fragment>
            <Head contenido={titulosHead} />
            <Buscador />
            <table className="table table-striped table-bordered">
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
                        (clientesDt.map((object, i) => 
                            <tr key={i}>
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
                            </tr>))
                    : 
                        (<td colSpan="9" style={{height:"100px", padding:"20px"}}><h2 className="text-center"> - no hay datos -</h2></td>)
                    }
                </tbody>
            </table>
            <input type="button" onClick={(e) => HandlerClick(e)} value="Boton" />
            
        </Fragment>
    );
}

export default DireccionTributaria;