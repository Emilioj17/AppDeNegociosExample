import React, { useState, useContext } from 'react';

const Pagos = ({clienteDtCliqueado}) => {

    return (
        <div className="card">
            <div className="card-divider">
                <h4>Pagos</h4>
            </div>
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
                        </tr>
                    </thead>
                    <tbody>
                        {clienteDtCliqueado.dt2019ID.map((object, i) => 
                            <tr key={i}>
                                <td>2019</td>
                                <td>{object.mes}</td>
                                <td>{object.montoCobrado}</td>
                                <td>{object.montoPagado}</td>
                                <td>XXX</td>
                                <td>{object.numeroTransferencia}</td>
                                <td>{object.facturaNumero}</td>
                                <td>01 de Agosto de 2069</td>
                            </tr>)}
                        {clienteDtCliqueado.dt2020ID.map((object, i) => 
                            <tr key={i}>
                                <td>2020</td>
                                <td>{object.mes}</td>
                                <td>{object.montoCobrado}</td>
                                <td>{object.montoPagado}</td>
                                <td>XXX</td>
                                <td>{object.numeroTransferencia}</td>
                                <td>{object.facturaNumero}</td>
                                <td>01 de Agosto de 2069</td>
                            </tr>)}
                        {clienteDtCliqueado.dt2021ID.map((object, i) => 
                            <tr key={i}>
                                <td>2021</td>
                                <td>{object.mes}</td>
                                <td>{object.montoCobrado}</td>
                                <td>{object.montoPagado}</td>
                                <td>XXX</td>
                                <td>{object.numeroTransferencia}</td>
                                <td>{object.facturaNumero}</td>
                                <td>01 de Agosto de 2069</td>
                            </tr>)}
                        {clienteDtCliqueado.dt2022ID.map((object, i) => 
                            <tr key={i}>
                                <td>2022</td>
                                <td>{object.mes}</td>
                                <td>{object.montoCobrado}</td>
                                <td>{object.montoPagado}</td>
                                <td>XXX</td>
                                <td>{object.numeroTransferencia}</td>
                                <td>{object.facturaNumero}</td>
                                <td>01 de Agosto de 2069</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
            <div className='button-group align-right'>
                <button className="submit button">Editar Pagos</button>
                <button className="submit success button">Agregar Pago</button>
                <button className="submit alert button">Borrar Pago</button>
            </div>
        </div>
    );
}

export default Pagos;