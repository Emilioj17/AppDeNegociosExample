import React, { Fragment, useContext, useState, useEffect } from 'react';
import Head from "../component/Head";
import { Context } from "../../js/store/AppContext";
import Buscador from "../component/DireccionTributaria/Buscador";
import ListaClientesDt from "../component/DireccionTributaria/ListaClientesDt";
import FormularioClienteDt from "../component/DireccionTributaria/FormularioClienteDt";
import ClienteSeleccionado from "../component/DireccionTributaria/ClienteSeleccionado";

const DireccionTributaria = () => {
    const [nuevoCliente, setNuevoCliente] = useState(false);
    const [clienteSeleccionado, setClienteSeleccionado] = useState(false);
    const [clienteDtBuscado, setClienteDtBuscado] = useState(null);
    const [clienteDtCliqueado, setClienteDtCliqueado] = useState(null);
    const { store, actions } = useContext(Context);
    const { clientesDt } = store;
    const titulosHead = ["Bienvenido al Servicio de Direccion Tributaria", "Consulta información respecto a Clientes con este servicio contratado."];

    useEffect(() => {
        actions.getClientesDt();
    }, []);
    
    const HandlerNuevoCliente = (event) => {
        setNuevoCliente(true);
    }

    return (
        <Fragment>
            <Head contenido={titulosHead} />
            {(clienteSeleccionado) ? (<ClienteSeleccionado setClienteSeleccionado={setClienteSeleccionado} clienteDtCliqueado={clienteDtCliqueado}/>) : null}
            {(nuevoCliente) ? (<FormularioClienteDt setNuevoCliente={setNuevoCliente} />) : null}
            {(clienteSeleccionado || nuevoCliente) ? null : (
                <Fragment>
                    <div className='row'>
                        <div className='button-group align-right'>
                            <button className="submit success button" onClick={(e)=>HandlerNuevoCliente(e)}>Nuevo Cliente</button>
                            <button className="submit button">Filtrar Avanzado</button>
                            <button className="submit button">Exportar Seleccion</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='grid-x grid-margin-x'>
                            <Buscador setClienteDt={setClienteDtBuscado}/>
                        </div>
                    </div>
                    <ListaClientesDt store={store} clientesDt={clientesDt} clienteDtBuscado={clienteDtBuscado} setClienteSeleccionado={setClienteSeleccionado} setClienteDtCliqueado={setClienteDtCliqueado}/>
                </Fragment>)
            }
        </Fragment>
    );
}

export default DireccionTributaria;