import React, { useState, useContext } from 'react';
import { Context } from "../../../../store/AppContext";
import BorrarPago from './BorrarPago';
import IngresoPago from './IngresoPago';
import EditarPago from './EditarPago';
import FiltroPagos from './FiltrosPagos';
import ListaPagos from './ListaPagos';
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit, AiOutlineSmallDash } from "react-icons/ai";

//Este Formulario es de Direccion Tributaria (Modificar Cliente Existente)

const ModificarClienteDt = ({setClickPagos, setDSetectorCambios}) => {
    const { store, actions } = useContext(Context);
    const [borrarPagos, setBorrarPagos] = useState(false);
    const [editarPagos, setEditarPagos] = useState(false);
    const [crearPagos, setCrearPagos] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [pagoSeleccionado, setPagoSeleccionado] = useState({
        object: null,
        year: null
    });
    const [filtro, setFiltro] = useState(false);
    const [filtroYear, setFiltroYear] = useState("todos");
    const [filtroMesInicio, setFiltroMesInicio] = useState("Enero");
    const [filtroMesTermino, setFiltroMesTermino] = useState("Diciembre");
    const [filtroSaldo, setFiltroSaldo] = useState("todos");

    const ListaDesplegarPagos = (object, i, year) => {
        return (
            <tr key={i} id={object.id} >
                <td>{year}</td>
                <td>{object.mes}</td>
                <td>${object.montoCobrado}</td>
                <td>${object.montoPagado}</td>
                <td>${object.montoCobrado - object.montoPagado}</td>
                <td>{object.numeroTransferencia}</td>
                <td>{object.facturaNumero}</td>
                <td>{object.comentario}</td>
                {(!borrarPagos && !editarPagos) || disabled ? (<td><a className="clear button" disabled><AiOutlineSmallDash /></a></td>) : null}
                {borrarPagos && !disabled ? (<td><a className="clear button" onClick={()=>HandlerPagoSeleccionado(object, year)}><BsFillTrashFill/></a></td>) : null}
                {editarPagos && !disabled ? (<td><a className="clear button" onClick={()=>HandlerPagoSeleccionado(object, year)}><AiFillEdit /></a></td>):null}
            </tr>
        )
    }

    const HandlerPagoSeleccionado = (object, year) => {
        setDisabled(true);
        setPagoSeleccionado({
            object: object,
            year: year
        })
    }

    const HandlerCerrar = (event) => {
        setClickPagos(false);
    }

    const HandlerBorrarPagos = (event) => {
        borrarPagos ? setBorrarPagos(false) : setBorrarPagos(true);
        setEditarPagos(false);
        setCrearPagos(false);
    }

    const HandlerEditarPagos = (event) => {
        editarPagos ? setEditarPagos(false) : setEditarPagos(true);
        setBorrarPagos(false);
        setCrearPagos(false);
    }

    const HandlerCrearPagos = (event) => {
        crearPagos ? setCrearPagos(false) : setCrearPagos(true);
        setDisabled(true);
        setEditarPagos(false);
        setBorrarPagos(false);
    }

    const HandlerBotonFiltrar = (event) => {
        filtro ? setFiltro(false) : setFiltro(true);
        setFiltroYear("todos");
        setFiltroMesInicio("Enero");
        setFiltroMesTermino("Diciembre");
        setFiltroSaldo("todos");
    }

    //Las siguientes lineas permiten hacer filtrado para el Rango de meses. Ojo a que aquí el .filter sobre
    // el store aplica si o si, no hay una versión de null. Quizás deba cambiar todo a esta forma.
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let inicio
    (filtroMesInicio === "" || filtroMesInicio === "Desde este mes...") ? (inicio = 0):(inicio = meses.indexOf(filtroMesInicio))
    let final
    (filtroMesTermino === "" || filtroMesTermino === "Hasta este mes...") ? (final = meses.length):(final = meses.indexOf(filtroMesTermino))
    meses = meses.slice(inicio, final + 1);

    const Saldo = (objeto) => {
        if (filtroSaldo == "todos") {
            return objeto
        } else if (filtroSaldo == "conSaldo") {
            if (objeto.montoCobrado - objeto.montoPagado > 0 || objeto.montoCobrado - objeto.montoPagado < 0) {
                return objeto
            }
        } else if (filtroSaldo == "sinSaldo") {
            if (objeto.montoCobrado - objeto.montoPagado == 0) {
                return objeto
            }
        }
    }

    return (
        <div className='DivPrincipal'>
            <h4 className='DivTitulo'>Detalle para {(store.infoClienteDt != null) ? (store.infoClienteDt.razon.slice(0,35)) : null}</h4>
            <div className='DivFiltro text-right'>
                <a className="clear button secondary" disabled={disabled ? true: false} onClick={(e) => HandlerBotonFiltrar(e)}>Filtrar</a>
            </div>
            {filtro ? (<FiltroPagos
                        setFiltroYear={setFiltroYear}
                        setFiltroMesInicio={setFiltroMesInicio}
                        setFiltroMesTermino={setFiltroMesTermino}
                        setFiltroSaldo={setFiltroSaldo}
                        disabled={disabled}/>) : null}
            <div className={filtro ? "DivSecundario2": "DivSecundario"}>
                <div className="card-section">
                    <table className="table hover">
                        <thead>
                            <tr>
                                <th scope="col">Año</th>
                                <th scope="col">Mes</th>
                                <th scope="col">Monto Cobrado</th>
                                <th scope="col">Monto Pagado</th>
                                <th scope="col">Saldo</th>
                                <th scope="col">Número de Transferencia</th>
                                <th scope="col">Número de Factura</th>
                                <th scope="col">Comentario</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {(store.pago2019 != null) ? (
                                (filtroYear == "todos" || filtroYear == "2019") ? (
                                    store.pago2019.filter(objeto => meses.includes(objeto.mes)).filter(objeto => Saldo(objeto)).map((object, i) => ListaDesplegarPagos(object, i, 2019))
                                ) : null
                            ) : null
                            }
                            {(store.pago2020 != null) ? (
                                (filtroYear == "todos" || filtroYear == "2020") ? (
                                    store.pago2020.filter(objeto => meses.includes(objeto.mes)).filter(objeto => Saldo(objeto)).map((object, i) => ListaDesplegarPagos(object, i, 2020))
                                ) : null
                            ) : null
                            }
                            {(store.pago2021 != null) ? (
                                (filtroYear == "todos" || filtroYear == "2021") ? (
                                    store.pago2021.filter(objeto => meses.includes(objeto.mes)).filter(objeto => Saldo(objeto)).map((object, i) => ListaDesplegarPagos(object, i, 2021))
                                ) : null
                            ) : null
                            }
                            {(store.pago2022 != null) ? (
                                (filtroYear == "todos" || filtroYear == "2022") ? (
                                    store.pago2022.filter(objeto => meses.includes(objeto.mes)).filter(objeto => Saldo(objeto)).map((object, i) => ListaDesplegarPagos(object, i, 2022))
                                ) : null
                            ) : null
                            }
                            {(store.pago2023 != null) ? (
                                (filtroYear == "todos" || filtroYear == "2023") ? (
                                    store.pago2023.filter(objeto => meses.includes(objeto.mes)).filter(objeto => Saldo(objeto)).map((object, i) => ListaDesplegarPagos(object, i, 2023))
                                ) : null
                            ) : null
                            }
                            {(store.pago2024 != null) ? (
                                (filtroYear == "todos" || filtroYear == "2024") ? (
                                    store.pago2024.filter(objeto => meses.includes(objeto.mes)).filter(objeto => Saldo(objeto)).map((object, i) => ListaDesplegarPagos(object, i, 2024))
                                ) : null
                            ) : null
                            }
                        </tbody>
                            {store.infoClienteDt=="" ? (<tbody><p>No hay Informacion de Pagos...</p></tbody>): null}
                    </table>
                </div>
            </div>
            {borrarPagos && pagoSeleccionado.object != null ? (<BorrarPago pagoSeleccionado={pagoSeleccionado} setPagoSeleccionado={setPagoSeleccionado} setDSetectorCambios={setDSetectorCambios} setDisabled={setDisabled}/>) : null}
            {editarPagos && pagoSeleccionado.object != null ? (<EditarPago pagoSeleccionado={pagoSeleccionado} setPagoSeleccionado={setPagoSeleccionado} setDSetectorCambios={setDSetectorCambios} setDisabled={setDisabled}/>) : null}
            {crearPagos ? (<IngresoPago setCrearPagos={setCrearPagos} setDisabled={setDisabled} setDSetectorCambios={setDSetectorCambios}/>): null}
            <div className='button-group align-right DivBotones'>
                <button className="submit button success" onClick={(e) => HandlerCrearPagos(e)} disabled={disabled ? true: false}>Agregar Pago</button>
                <button className="submit button warning" onClick={(e)=>  HandlerEditarPagos(e)} disabled={disabled ? true: false}>Editar Pago</button>
                <button className="submit button alert" onClick={(e)=> HandlerBorrarPagos(e)} disabled={disabled ? true: false}>Borrar Pago</button>
                <button className="submit button" onClick={(e)=> HandlerCerrar(e)} disabled={disabled ? true: false}>Cerrar</button>
            </div>
        </div>
    )
}

export default ModificarClienteDt;