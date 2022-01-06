import React, { useState, useContext } from 'react';


const ClienteSeleccionado = ({store, clientesD, setClienteSeleccionado, clienteDtCliqueado}) => {
    const HandlerCerrar = (event) => {
        setClienteSeleccionado(false)
    }

    return (
        <div className='row'>
            <div className="callout" data-closable>
                <button className="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
                    <span aria-hidden="true">×</span>
                </button>
                <br />
                <div className='button-group align-right'>
                    <button className="submit success button">Modificar Cliente</button>
                    <button className="submit warning button">Sacar Informe</button>
                </div>
                <div className="grid-x">
                    <div className="cell small-6">
                        <div className="card" style={{width: '99%'}}>
                            <div className="card-divider">
                                <h4>Informacion de Cliente</h4>
                            </div>
                            <div className="card-section">
                                <ul>
                                    <li>Id:{clienteDtCliqueado.id}</li>
                                    <li>Razon Social: {clienteDtCliqueado.razon}</li>
                                    <li>Rut Empresa: {clienteDtCliqueado.rut}</li>
                                    <li>Nombre de Representante: {clienteDtCliqueado.representante}</li>
                                    <li>Rut Representante: {clienteDtCliqueado.rutRepresentante}</li>
                                    <li>Fecha Contratacion: {clienteDtCliqueado.fechaContratacion}</li>
                                    <li>Erpyme: {clienteDtCliqueado.erpyme}</li>
                                    <li>Vigente: {clienteDtCliqueado.vigente}</li>
                                    <li>Nacionalidad:</li>
                                    <li>Correo: {clienteDtCliqueado.correo}</li>
                                    <li>Fono: {clienteDtCliqueado.fono}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="cell small-6">
                    <div className="card" >
                            <div className="card-divider">
                                <h4>Notas</h4>
                            </div>
                            <div className="card-section">
                                ...No hay Notas...
                                <table className="table">
                                    <tbody>
                                        {clienteDtCliqueado.notas.map((object, i) => 
                                            <tr key={i}>
                                                <td>{object.comentario}</td>
                                            </tr>)}
                                    </tbody>
                                </table>
                            </div>
                            <label>
                                Quieres agregar algún comentario?
                                <textarea placeholder="Escribe aquí tu Comentario o Nota"></textarea>
                            </label>
                            <div className='button-group align-right'>
                                <button className="submit button">Agregar Nota</button>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClienteSeleccionado;