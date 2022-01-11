import React, { useState, useContext } from 'react';
import { Context } from "../../../../store/AppContext";

//Este Formulario es de Direccion Tributaria (Modificar Cliente Existente)

const ModificarClienteDt = ({setClickPagos}) => {
    const { store, actions } = useContext(Context);
    const [borrarPagos, setBorrarPagos] = useState(false);

    const HandlerCerrar = (event) => {
        setClickPagos(false);
    }

    const HandlerBorrarPagos = (event) => {
        borrarPagos ? setBorrarPagos(false) : setBorrarPagos(true);
    }

    return (
        <div>
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
                                store.pago2019.map((object, i) => 
                                    <tr key={i}>
                                        <td>2019</td>
                                        <td>{object.mes}</td>
                                        <td>${object.montoCobrado}</td>
                                        <td>${object.montoPagado}</td>
                                        <td>${object.montoCobrado - object.montoPagado}</td>
                                        <td>{object.numeroTransferencia}</td>
                                        <td>{object.facturaNumero}</td>
                                        <td>01/07/2019</td>
                                        {borrarPagos ? (<td>X</td>): <td></td>}
                                    </tr>)
                            ) : null
                        }
                        {(store.pago2020 != null) ? (
                                store.pago2020.map((object, i) => 
                                    <tr key={i}>
                                        <td>2020</td>
                                        <td>{object.mes}</td>
                                        <td>${object.montoCobrado}</td>
                                        <td>${object.montoPagado}</td>
                                        <td>${object.montoCobrado - object.montoPagado}</td>
                                        <td>{object.numeroTransferencia}</td>
                                        <td>{object.facturaNumero}</td>
                                        <td>01/07/2019</td>
                                        {borrarPagos ? (<td>X</td>): <td></td>}
                                    </tr>)
                            ) : null
                        }
                        {(store.pago2021 != null) ? (
                                store.pago2021.map((object, i) => 
                                    <tr key={i}>
                                        <td>2021</td>
                                        <td>{object.mes}</td>
                                        <td>${object.montoCobrado}</td>
                                        <td>${object.montoPagado}</td>
                                        <td>${object.montoCobrado - object.montoPagado}</td>
                                        <td>{object.numeroTransferencia}</td>
                                        <td>{object.facturaNumero}</td>
                                        <td>01/07/2019</td>
                                        {borrarPagos ? (<td>X</td>): <td></td>}
                                    </tr>)
                            ) : null
                        }
                        {(store.pago2022 != null) ? (
                                store.pago2022.map((object, i) => 
                                    <tr key={i}>
                                        <td>2022</td>
                                        <td>{object.mes}</td>
                                        <td>${object.montoCobrado}</td>
                                        <td>${object.montoPagado}</td>
                                        <td>${object.montoCobrado - object.montoPagado}</td>
                                        <td>{object.numeroTransferencia}</td>
                                        <td>{object.facturaNumero}</td>
                                        <td>01/07/2019</td>
                                        {borrarPagos ? (<td>X</td>): <td></td>}
                                    </tr>)
                            ) : null
                        }
                    </tbody>
                        {store.infoClienteDt=="" ? (<tbody><p>No hay Informacion de Pagos...</p></tbody>): null}
                </table>
            </div>
            <div className='button-group align-right'>
                    <button className="submit button">Agregar Pago</button>
                    <button className="submit button">Editar Pago</button>
                    <button className="submit button" onClick={(e)=> HandlerBorrarPagos(e)}>Borrar Pago</button>
                    <button className="submit button" onClick={(e)=> HandlerCerrar(e)}>Cerrar</button>
            </div>


        </div>
    )

}

export default ModificarClienteDt;