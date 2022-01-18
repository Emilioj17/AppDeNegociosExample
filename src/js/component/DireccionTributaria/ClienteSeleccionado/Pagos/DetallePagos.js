import React, { useState, useContext } from 'react';
import { Context } from "../../../../store/AppContext";
import BorrarPago from './BorrarPago';
import IngresoPago from './IngresoPago';
import EditarPago from './EditarPago';
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
                <td>01/07/{year}</td>
                {(!borrarPagos && !editarPagos) || disabled ? (<td><a class="clear button"><AiOutlineSmallDash /></a></td>) : null}
                {borrarPagos && !disabled ? (<td><a class="clear button" onClick={()=>HandlerPagoSeleccionado(object, year)}><BsFillTrashFill/></a></td>) : null}
                {editarPagos && !disabled ? (<td><a class="clear button" onClick={()=>HandlerPagoSeleccionado(object, year)}><AiFillEdit /></a></td>):null}
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

    return (
        <div className='DivPrincipal'>
            <h2 className='DivTitulo'>Detalle de Pagos para {(store.infoClienteDt != null) ? (store.infoClienteDt.razon):null}</h2>
            <div className='DivSecundario'>
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
                                <th scope="col">Fecha de Pago</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {(store.pago2019 != null) ? (
                                    store.pago2019.map((object, i) => ListaDesplegarPagos(object, i, 2019))
                                ) : null
                            }
                            {(store.pago2020 != null) ? (
                                    store.pago2020.map((object, i) => ListaDesplegarPagos(object, i, 2020))
                                ) : null
                            }
                            {(store.pago2021 != null) ? (
                                    store.pago2021.map((object, i) => ListaDesplegarPagos(object, i, 2021))
                                ) : null
                            }
                            {(store.pago2022 != null) ? (
                                    store.pago2022.map((object, i) => ListaDesplegarPagos(object, i, 2022))
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
                <button className="submit button success" onClick={(e) => HandlerCrearPagos(e)} disabled={disabled ? "true": false}>Agregar Pago</button>
                    <button className="submit button warning" onClick={(e)=>  HandlerEditarPagos(e)} disabled={disabled ? "true": false}>Editar Pago</button>
                    <button className="submit button alert" onClick={(e)=> HandlerBorrarPagos(e)} disabled={disabled ? "true": false}>Borrar Pago</button>
                    <button className="submit button" onClick={(e)=> HandlerCerrar(e)} disabled={disabled ? "true": false}>Cerrar</button>
            </div>
        </div>
    )
}

export default ModificarClienteDt;