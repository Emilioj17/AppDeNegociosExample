import React, { Fragment, useContext, useState, useEffect } from 'react';
import Head from "../component/Head";
import { Context } from "../../js/store/AppContext";
import { useHistory } from "react-router-dom";
import Buscador from "../component/DireccionTributaria/Buscador";
import ListaClientesDt from "../component/DireccionTributaria/ListaClientesDt";
import FormularioClienteDt from "../component/DireccionTributaria/FormularioClienteDt";
import ClienteSeleccionado from "../component/DireccionTributaria/ClienteSeleccionado";
import FiltroListaClientes from '../component/DireccionTributaria/FiltroListaClientes';
import { IoRefreshSharp, IoEllipsisVerticalSharp } from "react-icons/io5";
import { ExportTableToExcel } from "../Helper/ExportTableToExcel";
import '../../styles/PagosDt.css';


//Esta es la rama Principal de Direccion Tributaria. Aquí se despliega ListaClientesDt.js y el Buscador.js. Además si
//se da clic a un elemento de la ListaClientesDt.js se ejecuta ClienteSeleccionado.js. También puedes hacer clic en
//Nuevo Cliente y se ejecutará FormularioClienteDt.js.

const DireccionTributaria = ({witch, setWitch}) => {
    const { store, actions } = useContext(Context);
    const history = useHistory();
    const [nuevoCliente, setNuevoCliente] = useState(false);
    const [clienteSeleccionado, setClienteSeleccionado] = useState(false);
    const [clienteDtBuscado, setClienteDtBuscado] = useState(null);
    const [clienteDtCliqueado, setClienteDtCliqueado] = useState(null);
    const [filtro, setFiltro] = useState(false);
    const [filtroVigente, setFiltroVigente] = useState("todos");
    const [filtroErpyme, setFiltroErpyme] = useState("todos");
    const [filtroSaldo, setFiltroSaldo] = useState("todos");
    const [botonClientesPorPagina, setBotonClientesPorPagina] = useState(false);
    const [clientesPorPagina, setClientesPorPagina] = useState(20);
    const titulosHead = ["Bienvenido al Servicio de Direccion Tributaria", "Consulta información respecto a Clientes con este servicio contratado."];

    //Este useEffect inicia getClientes, y llama a todo el listado de clientes. Con esto, cuando se abre ListaClientesDt.js que llama al store.clientesDt ya tiene una lista por descargar-
    useEffect(() => {
        actions.getClientesDt();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (store.usuarioActual == null && store.token == null) {
                history.push("/");
            }
        }, 500);
	})

    //Las siguientes funciones son las que permiten algunas acciones básicas en la página.
    
    const HandlerNuevoCliente = (event) => {
        setNuevoCliente(true);
    }

    const HandlerFiltro = (event) => {
        filtro ? setFiltro(false) : setFiltro(true);
    }

    const HandlerRecargarPagina = (event) => {
        window.location.reload();
    }

    const HandlerExportarTabla = (event) => {
        ExportTableToExcel('xlsx')
    }

    const HandlerBotonClientesPorPagina = (event) => {
        botonClientesPorPagina ? setBotonClientesPorPagina(false): setBotonClientesPorPagina(true)
    }

    const HandlerClientesPorPagina = (event) => {
        setClientesPorPagina(parseInt(event.target.id))
    }

    return (
        <Fragment>
            <Head contenido={titulosHead} />
            {(clienteSeleccionado) ? (<ClienteSeleccionado setClienteSeleccionado={setClienteSeleccionado} clienteDtCliqueado={clienteDtCliqueado} witch={witch} setWitch={setWitch}/>) : null}
            {(nuevoCliente) ? (<FormularioClienteDt setNuevoCliente={setNuevoCliente} />) : null}
            {(clienteSeleccionado || nuevoCliente) ? null : (
                <Fragment>
                    <div className='row'>
                        <div className='button-group align-right'>
                            <button className="submit success button" onClick={(e)=>HandlerNuevoCliente(e)}>Nuevo Cliente</button>
                            <button className="submit button" onClick={(e)=>HandlerExportarTabla(e)}>Exportar Seleccion</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='grid-x grid-margin-x'>
                            <Buscador setClienteDtBuscado={setClienteDtBuscado} setClientesPorPagina={setClientesPorPagina}/>
                            <div className='cell small-4 text-right' style={{ margin:"auto"}}>
                                <a class="clear button secondary" onClick={(e) => HandlerFiltro(e)}>Filtrar</a>
                                <a class="clear button secondary" onClick={(e) => HandlerRecargarPagina(e)}><IoRefreshSharp />Recargar</a>
                                <a class="clear button secondary" onClick={(e) => HandlerBotonClientesPorPagina(e)}><IoEllipsisVerticalSharp /></a>
                                {botonClientesPorPagina ? (
                                    <div style={{display:"inline"}}>
                                        <a className="button tiny" id="5" onClick={(e) => HandlerClientesPorPagina(e)} style={(clientesPorPagina == "5" ? {backgroundColor:"rgba(6,70,112,255)"}: null)}>5</a>
                                        <a className="button tiny" id="50" onClick={(e)=> HandlerClientesPorPagina(e)} style={(clientesPorPagina == "50" ? {backgroundColor:"rgba(6,70,112,255)"}: null)}>50</a>
                                        <a className="button tiny" id="100" onClick={(e) => HandlerClientesPorPagina(e)} style={(clientesPorPagina == "100" ? {backgroundColor:"rgba(6,70,112,255)"}: null)}>100</a>
                                        <a className="button tiny"id="100000" onClick={(e)=> HandlerClientesPorPagina(e)} style={(clientesPorPagina == "100000" ? {backgroundColor:"rgba(6,70,112,255)"}: null)}>Todos</a>
                                    </div>
                                ) : (null)}
                            </div>
                        </div> 
                    </div>
                    {filtro ? (<FiltroListaClientes
                        setFiltro={setFiltro}
                        setFiltroVigente={setFiltroVigente}
                        setFiltroErpyme={setFiltroErpyme}
                        setFiltroSaldo={setFiltroSaldo}
                        setClientesPorPagina={setClientesPorPagina}/>) : null}
                    <ListaClientesDt
                        clienteDtBuscado={clienteDtBuscado}
                        setClienteSeleccionado={setClienteSeleccionado}
                        setClienteDtCliqueado={setClienteDtCliqueado}
                        filtroVigente={filtroVigente}
                        filtroErpyme={filtroErpyme}
                        filtroSaldo={filtroSaldo}
                        clientesPorPagina={clientesPorPagina}
                        witch={witch}/>
                </Fragment>)
            }
        </Fragment>
    );
}

export default DireccionTributaria;