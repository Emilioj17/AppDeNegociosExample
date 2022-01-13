import React, { useState, useContext } from 'react';
import { Context } from "../../../../store/AppContext";

//Este Formulario es de Direccion Tributaria (Modificar Cliente Existente)

const ModificarClienteDt = ({setClickPagos}) => {
    const { store, actions } = useContext(Context);
    const [borrarPagos, setBorrarPagos] = useState(false);
    const [editarPagos, setEditarPagos] = useState(false);
    const [pagoSeleccionado, setPagoSeleccionado] = useState({
        year: null,
        id: null,
        mes: null,
        montoPagado: null,
    });

    const ListaDesplegarPagos = (object, i, year) => {
        return (
            <tr key={i} id={object.id} onClick={()=>HandlerPagoSeleccionado(object, year)}>
                <td>{year}</td>
                <td>{object.mes}</td>
                <td>${object.montoCobrado}</td>
                <td>${object.montoPagado}</td>
                <td>${object.montoCobrado - object.montoPagado}</td>
                <td>{object.numeroTransferencia}</td>
                <td>{object.facturaNumero}</td>
                <td>01/07/{year}</td>
                {!borrarPagos && !editarPagos ? (<td></td>) : null}
                {borrarPagos ? (<td>X</td>) : null}
                {editarPagos ? (<td>?</td>):null}
            </tr>
        )
    }

    const HandlerPagoSeleccionado = (object, year) => {
        setPagoSeleccionado({
            year: year,
            id: object.id,
            mes: object.mes,
            montoPagado: object.montoPagado
        })
    }

    const HandlerCerrar = (event) => {
        setClickPagos(false);
    }

    const HandlerBorrarPagos = (event) => {
        borrarPagos ? setBorrarPagos(false) : setBorrarPagos(true);
        setEditarPagos(false);
    }

    const HandlerEditarPagos = (event) => {
        editarPagos ? setEditarPagos(false) : setEditarPagos(true);
        setBorrarPagos(false);
    }

    return (
        <div className='DivPrincipal'>
            <div className='DivSecundario'>
                <h2>Detalle de Pagos para {(store.infoClienteDt != null) ? (store.infoClienteDt.razon):null}</h2>
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
                <div className='button-group align-right'>
                        <button className="submit button">Agregar Pago</button>
                        <button className="submit button" onClick={(e)=>  HandlerEditarPagos(e)}>Editar Pago</button>
                        <button className="submit button" onClick={(e)=> HandlerBorrarPagos(e)}>Borrar Pago</button>
                        <button className="submit button" onClick={(e)=> HandlerCerrar(e)}>Cerrar</button>
                </div>
            </div>
            {editarPagos && pagoSeleccionado.id != null ? (
                <div className='DivTerciario text-center'>
                    ¿Estás Seguro que deseas borrar este Pago?
                    <div className='button-group align-center'>
                            <button className="submit button">Aceptar</button>
                            <button className="submit button">Cancelar</button>
                </div>
            </div>
            ): null}
        </div>
    )

}

export default ModificarClienteDt;