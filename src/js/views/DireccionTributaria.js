import React, { Fragment, useContext, useState, useEffect } from 'react';
import Head from "../component/Head";
import { Context } from "../../js/store/AppContext";
import Buscador from "../component/DireccionTributaria/Buscador";
import ListaClientesDt from "../component/DireccionTributaria/ListaClientesDt";
import FormularioClienteDt from "../component/DireccionTributaria/FormularioClienteDt";
import ClienteSeleccionado from "../component/DireccionTributaria/ClienteSeleccionado";
import FiltroListaClientes from '../component/DireccionTributaria/FiltroListaClientes';
import '../../styles/PagosDt.css';


//Esta es la rama Principal de Direccion Tributaria. Aquí se despliega ListaClientesDt.js y el Buscador.js. Además si
//se da clic a un elemento de la ListaClientesDt.js se ejecuta ClienteSeleccionado.js. También puedes hacer clic en
//Nuevo Cliente y se ejecutará FormularioClienteDt.js.

const DireccionTributaria = () => {
    const { store, actions } = useContext(Context);
    const [nuevoCliente, setNuevoCliente] = useState(false);
    const [clienteSeleccionado, setClienteSeleccionado] = useState(false);
    const [clienteDtBuscado, setClienteDtBuscado] = useState(null);
    const [clienteDtCliqueado, setClienteDtCliqueado] = useState(null);
    const [filtro, setFiltro] = useState(false);
    const [filtroVigente, setFiltroVigente] = useState("todos");
    const [filtroErpyme, setFiltroErpyme] = useState("todos");
    const [filtroSaldo, setFiltroSaldo] = useState("todos");
    const titulosHead = ["Bienvenido al Servicio de Direccion Tributaria", "Consulta información respecto a Clientes con este servicio contratado."];

    useEffect(() => {
        actions.getClientesDt();
    }, []);
    
    const HandlerNuevoCliente = (event) => {
        setNuevoCliente(true);
    }

    const HandlerFiltro = (event) => {
        filtro ? setFiltro(false) : setFiltro(true);
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
                            <button className="submit button" disabled>Exportar Seleccion</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='grid-x grid-margin-x'>
                            <Buscador setClienteDtBuscado={setClienteDtBuscado} />
                            <div className='cell small-2 text-right' style={{ margin:"auto"}}>
                                <a class="clear button secondary" onClick={(e)=>HandlerFiltro(e)}>Filtrar</a>
                            </div>
                        </div> 
                    </div>
                    {filtro ? (<FiltroListaClientes setFiltro={setFiltro} setFiltroVigente={setFiltroVigente} setFiltroErpyme={setFiltroErpyme} setFiltroSaldo={setFiltroSaldo}/>): null}
                    <ListaClientesDt clienteDtBuscado={clienteDtBuscado} setClienteSeleccionado={setClienteSeleccionado} setClienteDtCliqueado={setClienteDtCliqueado}/>
                </Fragment>)
            }
        </Fragment>
    );
}

export default DireccionTributaria;