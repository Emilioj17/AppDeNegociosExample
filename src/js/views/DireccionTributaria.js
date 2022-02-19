import React, { Fragment, useContext, useState, useEffect } from 'react';
import Head from "../component/Head";
import { Context } from "../../js/store/AppContext";
import { useHistory } from "react-router-dom";
import Buscador from "../component/DireccionTributaria/Buscador";
import BuscadorNormal from '../component/DireccionTributaria/BusquedaUsuarioNormal/BuscadorNormal';
import ResultadoBusqueda from '../component/DireccionTributaria/BusquedaUsuarioNormal/ResultadoBusqueda';
import ListaClientesDt from "../component/DireccionTributaria/ListaClientesDt";
import FormularioClienteDt from "../component/DireccionTributaria/FormularioClienteDt";
import ClienteSeleccionado from "../component/DireccionTributaria/ClienteSeleccionado";
import FiltroListaClientes from '../component/DireccionTributaria/FiltroListaClientes';
import Paginador from '../component/DireccionTributaria/Paginator';
import { IoRefreshSharp, IoEllipsisVerticalSharp } from "react-icons/io5";
import { ExportTableToExcel } from "../Helper/ExportTableToExcel";
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
        actions.getClientesDt(1);
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

    const HandlerBuscar = (event) => {
        actions.getBusquedaDt(clienteDtBuscado);
    }

    //Lo que se renderizará según tipo de Usuario

    return (
        <Fragment>
            <Head contenido={titulosHead} />
            {store.usuarioActual != null ? (
                (store.usuarioActual.tipo === "Administrador" || store.usuarioActual.tipo === "Cobranza" || store.usuarioActual.tipo === "Super Administrador") ?
                    (
                    <div className=''>
                        <div className='column'>
                            {(clienteSeleccionado) ? (<ClienteSeleccionado setClienteSeleccionado={setClienteSeleccionado} clienteDtCliqueado={clienteDtCliqueado} />) : null}
                            {(nuevoCliente) ? (<FormularioClienteDt setNuevoCliente={setNuevoCliente} />) : null}
                            {(clienteSeleccionado || nuevoCliente) ? null : (
                                <Fragment>
                                    <div className='row'>
                                        <div className='grid-x grid-margin-x' style={{boxShadow: "0px 4px 8px #000000", paddingTop:"20px", paddingBottom:"5px"}}>
                                            <Buscador setClienteDtBuscado={setClienteDtBuscado} />
                                            <div className='cell small-1 text-right'><a className="clear button secondary" onClick={(e)=>HandlerBuscar(e)}>Buscar</a></div>
                                            <div className='cell small-1 text-right'><a className="clear button secondary" onClick={(e) => HandlerRecargarPagina(e)}><IoRefreshSharp /></a></div>
                                        </div>
                                    </div>
                                    <br />
                                    <hr />
                                    <div className='row button-group align-right'>
                                        <button className="submit success button" onClick={(e) => HandlerNuevoCliente(e)}>Nuevo Cliente</button>
                                        <button className="submit button" onClick={(e) => HandlerExportarTabla(e)}>Exportar Seleccion</button>
                                        <button className="submit button secondary disabled" onClick={(e) => HandlerFiltro(e)}>Filtrar</button>
                                    </div>
                                        <div className='' style={{ textAlign: "center" }}>
                                            <br />
                                        <Paginador />
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
                    ) :
                    (
                    <div className='row'>
                        <div className='column'>
                            <div>
                                <h5>Consulta si un cliente tiene el servicio contratado</h5>
                                <p>Puedes hacer busqueda según los siguientes criterios</p>
                                <ul>
                                    <li>Razon Social o Nombre de Representante</li>
                                    <li>Rut de la sociedad o Rut Representante. ex: 76717904-9</li>
                                    <li>Correo registrado</li>
                                    <li>Fono registrado</li>
                                </ul>
                            </div>
                            <div className='grid-x grid-margin-x'>
                                <BuscadorNormal setClienteDtBuscado={setClienteDtBuscado} />
                                <button className="cell small-2 submit success button" onClick={(e) => HandlerBuscar(e)}>Buscar</button>
                            </div>
                            {clienteDtBuscado!= null ? <ResultadoBusqueda clienteDtBuscado={clienteDtBuscado}
                                    setClienteSeleccionado={setClienteSeleccionado}
                                    setClienteDtCliqueado={setClienteDtCliqueado}
                                    filtroVigente={filtroVigente}
                                    filtroErpyme={filtroErpyme}
                                    filtroSaldo={filtroSaldo}/> : null}
                        </div>
                    </div>
                    )
            ): null}
        </Fragment>
    );
}

export default DireccionTributaria;