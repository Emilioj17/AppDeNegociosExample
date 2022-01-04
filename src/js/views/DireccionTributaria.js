import React, { Fragment, useContext, useState, useEffect } from 'react';
import Head from "../component/Head";
import { Context } from "../../js/store/AppContext";
import Buscador from "../component/DireccionTributaria/Buscador";
import ListaClientesDt from "../component/DireccionTributaria/ListaClientesDt";
import FormularioClienteDt from "../component/DireccionTributaria/FormularioClienteDt";

const DireccionTributaria = () => {
    const [nuevoCliente, setNuevoCliente] = useState(false);
    const [clienteDtSeleccionado, setClienteDtSeleccionado] = useState(null);
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
            {nuevoCliente ? (<FormularioClienteDt setNuevoCliente={setNuevoCliente}/>) : (
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
                            <Buscador setClienteDt={setClienteDtSeleccionado}/>
                        </div>
                    </div>
                    <ListaClientesDt store={store} clientesDt={clientesDt} clienteDtSeleccionado={clienteDtSeleccionado}/>
                </Fragment>
            )}
        </Fragment>
    );
}

export default DireccionTributaria;