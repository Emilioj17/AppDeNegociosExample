import React, { useState, useContext } from 'react';
import { Context } from "../../../store/AppContext";

const Pagos = ({ clienteDtCliqueado, setClickPagos }) => {
    const { store, actions } = useContext(Context);
    const [filtro, setFiltro] = useState(false);
    
    const HandlerEditarPagos = (event) => {
        setClickPagos(true);
    }

    const BotonFiltrar = (event) => {
        filtro ? setFiltro(false) : setFiltro(true)
    }

    const FiltroPagos = () => {
        return (
            <div>
                <select className="form-select" id="year" name="year">
                    <option value="true" selected>Desde el inicio de los tiempos...</option>
                    <option value="true">2019</option>
                    <option value="false">2020</option>
                    <option value="false">2021</option>
                    <option value="false">2023</option>
                </select>
                <select className="form-select" id="mes" name="mes">
                    <option value="true" selected>Todos los meses</option>
                    <option value="true">Enero</option>
                    <option value="false">Febrero</option>
                    <option value="false">Marzo</option>
                    <option value="false">Abril</option>
                    <option value="false">Mayo</option>
                    <option value="false">Junio</option>
                    <option value="false">Julio</option>
                    <option value="false">Agosto</option>
                    <option value="false">Septiembre</option>
                    <option value="false">Octubre</option>
                    <option value="false">Noviembre</option>
                    <option value="false">Diciembre</option>
                </select>
                <select className="form-select" id="saldo" name="saldo">
                    <option value="false" selected>Con y Sin Saldos</option>
                    <option value="true">Con Saldo</option>
                    <option value="false">Sin Saldo</option>
                </select>
            </div>
            
        )
    }

    return (
        <div className="card">
            <div className="card-divider">
                <h4 className='no-print'>Pagos</h4>
                <h4 className='print-yes'>Pagos Servicio Direccion Tributaria</h4>
            </div>
            <div className="card-section">
                <div className='no-print text-right'>
                    <a class="clear button secondary" onClick={(e)=>BotonFiltrar(e)}>Filtrar</a>
                </div>
                {filtro ? (<FiltroPagos />):null}
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
                                    </tr>)
                            ) : null
                        }
                    </tbody>
                        {store.infoClienteDt=="" ? (<tbody><p>No hay Informacion de Pagos...</p></tbody>): null}
                </table>
            </div>
            <div className='button-group align-right no-print'>
                <button className="submit button" onClick={(e)=>HandlerEditarPagos(e)}>Editar Pagos</button>
            </div>
        </div>
    );
}

export default Pagos;