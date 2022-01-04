import React, { Fragment, useContext, useState, useEffect } from 'react';
import Head from "../component/Head";
import { Context } from "../../js/store/AppContext";
import Buscador from "../component/DireccionTributaria/Buscador";
import ListaClientesDt from "../component/DireccionTributaria/ListaClientesDt";

const DireccionTributaria = () => {
    const [clienteDt, setClienteDt] = useState(null);
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
            <div className='row'>
                <div className='button-group align-right'>
                    <button className="submit success button">Nuevo Cliente</button>
                    <button className="submit button">Filtrar Avanzado</button>
                    <button className="submit button">Exportar Seleccion</button>
                </div>
            </div>
            <div className='row'>
                <div className='grid-x grid-margin-x'>
                    <Buscador setClienteDt={setClienteDt}/>
                </div>
            </div>
            <ListaClientesDt store={store} clientesDt={clientesDt} clienteDt={clienteDt}/>
        </Fragment>
    );
}

export default DireccionTributaria;