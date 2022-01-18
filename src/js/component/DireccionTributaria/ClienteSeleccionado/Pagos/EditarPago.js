import React, { useState, useContext } from 'react';
import { Context } from "../../../../store/AppContext";
import { FiAlertOctagon } from "react-icons/fi";

//Este Formulario es para Edición de Pagos de Dt

const EditarPago = ({pagoSeleccionado, setPagoSeleccionado, setDSetectorCambios, setDisabled}) => {
    const { store, actions } = useContext(Context);
    const [datos, setDatos] = useState({
        year: pagoSeleccionado.year,
        mes: null,
        montoCobrado: null,
        montoPagado: null,
        numeroTransferencia: null,
        facturaNumero: null,
        fechaPago: null,
      });

    const HandlerCerrar = (event) => {
        setDisabled(false);
        setPagoSeleccionado({
            object: null,
            year: null
        });
    }

    const HandlerEditarPago = (event) => {
        actions.editarPago(datos.year, datos.mes, datos.numeroTransferencia, datos.montoPagado, datos.montoCobrado, datos.facturaNumero, pagoSeleccionado.object.id)
        setDSetectorCambios(true);
        setTimeout(() => { setPagoSeleccionado({
            object: null,
            year: null
        });
        }, 200);
        setDisabled(false);
    }

    const HandlerCompletarDatos = (event) => {
        setDatos({ ...datos, [event.target.name]: event.target.value })
    };

    return (
        <div className='DivTerciario text-center'>
            <div className="card">
                <h4>Vas a Editar un Pago</h4>
                <div className="card-divider">
                    <label className="form-label" htmlFor='year'>Seleciona Año
                        <select className="form-select" id="year" name="year"
                            defaultValue={pagoSeleccionado.year} onChange={(e) => HandlerCompletarDatos(e)}>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                    </label>
                    <label htmlFor="mes">Selecciona mes
                        <select className="form-select" id="mes" name="mes"
                            defaultValue={pagoSeleccionado.object.mes} onChange={(e) => HandlerCompletarDatos(e)}>
                            <option value="Enero">Enero</option>
                            <option value="Febrero">Febrero</option>
                            <option value="Marzo">Marzo</option>
                            <option value="Abril">Abril</option>
                            <option value="Mayo">Mayo</option>
                            <option value="Junio">Junio</option>
                            <option value="Julio">Julio</option>
                            <option value="Agosto">Agosto</option>
                            <option value="Septiembre">Septiembre</option>
                            <option value="Octubre">Octubre</option>
                            <option value="Noviembre">Noviembre</option>
                            <option value="Diciembre">Diciembre</option>
                        </select>
                    </label>
                    <label htmlFor="montoCobrado">Monto Cobrado
                        <input type="number" name="montoCobrado"
                            defaultValue={pagoSeleccionado.object.montoCobrado} onChange={(e) => HandlerCompletarDatos(e)}/>
                    </label>
                </div>
                <div className="card-divider">
                    <label htmlFor="montoPagado">Monto Pagado
                        <input type="number" name="montoPagado"
                            defaultValue={pagoSeleccionado.object.montoPagado} onChange={(e) => HandlerCompletarDatos(e)}/>
                    </label>
                    <label htmlFor="numeroTransferencia">Número Transferencia
                        <input type="text" name="numeroTransferencia"
                            defaultValue={pagoSeleccionado.object.numeroTransferencia} onChange={(e) => HandlerCompletarDatos(e)}/>
                    </label>
                    <label htmlFor="facturaNumero">Número Factura
                        <input type="text" name="facturaNumero"
                            defaultValue={pagoSeleccionado.object.facturaNumero} onChange={(e) => HandlerCompletarDatos(e)}/>
                    </label>
                </div>
                <div className="card-divider">
                    <label htmlFor="fechaPago">Fecha de Pago
                        <input type="date" name="fechaPago" onChange={(e) => HandlerCompletarDatos(e)}/>
                    </label>
                </div>
                <div><h3><FiAlertOctagon/> Vas a modificar un Pago</h3></div>
                <div className='button-group align-center card-divider'>
                    <button className="submit button warning" onClick={(e)=>HandlerEditarPago(e)}>Editar Pago</button>
                    <button className="submit button" onClick={(e)=>HandlerCerrar(e)}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default EditarPago;