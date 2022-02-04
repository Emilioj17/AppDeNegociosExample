import React, { Fragment, useContext, useState, useEffect } from 'react';
import Head from "../component/Head";
import { Context } from "../../js/store/AppContext";
import { useHistory } from "react-router-dom";
import Buscador from "../component/DireccionTributaria/Buscador";
import ListaClientesDt from "../component/DireccionTributaria/ListaClientesDt";
import FormularioClienteDt from "../component/DireccionTributaria/FormularioClienteDt";
import ClienteSeleccionado from "../component/DireccionTributaria/ClienteSeleccionado";
import FiltroListaClientes from '../component/DireccionTributaria/FiltroListaClientes';
import ResultadoBusqueda from '../component/DireccionTributaria/ResultadoBusqueda';
import { IoRefreshSharp, IoEllipsisVerticalSharp } from "react-icons/io5";
import { ExportTableToExcel } from "../Helper/ExportTableToExcel";
import Loader from '../Helper/Loader';
import '../../styles/PagosDt.css';


//Esta es la rama Principal de Direccion Tributaria. Aquí se despliega ListaClientesDt.js y el Buscador.js. Además si
//se da clic a un elemento de la ListaClientesDt.js se ejecuta ClienteSeleccionado.js. También puedes hacer clic en
//Nuevo Cliente y se ejecutará FormularioClienteDt.js.

const DireccionTributaria = () => {
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
        }, 200);
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

    return (
        <Fragment>
            <Head contenido={titulosHead} />
            {clienteDtBuscado != null ? <ResultadoBusqueda clienteDtBuscado={clienteDtBuscado} setClienteDtBuscado={setClienteDtBuscado} /> : null}
            {clienteDtBuscado === null ?
                <div className='row'>
                    <div className='column'>
                        {(clienteSeleccionado) ? (<ClienteSeleccionado setClienteSeleccionado={setClienteSeleccionado} clienteDtCliqueado={clienteDtCliqueado} />) : null}
                        {(nuevoCliente) ? (<FormularioClienteDt setNuevoCliente={setNuevoCliente} />) : null}
                        {(clienteSeleccionado || nuevoCliente) ? null : (
                            <Fragment>
                                <div className='grid-x grid-margin-x' style={{boxShadow: "0px 4px 8px #000000", paddingTop:"20px", paddingBottom:"5px"}}>
                                    <Buscador setClienteDtBuscado={setClienteDtBuscado} />
                                    <div className='cell small-1 text-right'><a className="clear button secondary" onClick={(e) => HandlerRecargarPagina(e)}><IoRefreshSharp /></a></div>
                                    <div className='cell small-1 text-right'><a class="clear button secondary"><IoEllipsisVerticalSharp /></a></div>
                                </div>
                                <br />
                                <hr />
                                <div className='button-group align-right'>
                                    <button className="submit success button" onClick={(e) => HandlerNuevoCliente(e)}>Nuevo Cliente</button>
                                    <button className="submit button" onClick={(e) => HandlerExportarTabla(e)}>Exportar Seleccion</button>
                                    <button className="submit button secondary" onClick={(e) => HandlerFiltro(e)}>Filtrar</button>
                                </div>
                                <br />
                                {filtro ? (<FiltroListaClientes
                                    setFiltro={setFiltro}
                                    setFiltroVigente={setFiltroVigente}
                                    setFiltroErpyme={setFiltroErpyme}
                                    setFiltroSaldo={setFiltroSaldo} />) : null}
                                <ListaClientesDt
                                    clienteDtBuscado={clienteDtBuscado}
                                    setClienteSeleccionado={setClienteSeleccionado}
                                    setClienteDtCliqueado={setClienteDtCliqueado}
                                    filtroVigente={filtroVigente}
                                    filtroErpyme={filtroErpyme}
                                    filtroSaldo={filtroSaldo}/>
                            </Fragment>)
                        }
                    </div>
                </div>
                : null
            }
        </Fragment>
    );
}

export default DireccionTributaria;