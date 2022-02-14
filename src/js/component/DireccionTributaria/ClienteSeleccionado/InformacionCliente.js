import React, { useState, useContext } from 'react';
import { Context } from "../../../store/AppContext";
import { SaldoTotal } from "../../../Helper/SaldoTotal";


const InformacionCliente = () => {
    const { store, actions } = useContext(Context);

    const SaldoTotal2 = () => {
        const fecha = new Date(store.infoClienteDt.fechaContratacion);
        const fechaHoy = new Date();
        const diferenciaMeses = fechaHoy.getMonth() - fecha.getMonth() + (12 * (fechaHoy.getFullYear() - fecha.getFullYear()))
        return (<>{(diferenciaMeses * 9900).toString()}</>)
    }

    return (
        <div className="cell small-6">
            <div className="card" style={{width: '99%'}}>
                <div className="card-divider no-print">
                    <h4>Informacion de Cliente</h4>
                </div>
                <div className="card-section">
                        {(store.infoClienteDt != null) ? (
                                <ul className="no-bullet">
                                    <li>Id:{store.infoClienteDt.id}</li>
                                    <li>Razon Social: {store.infoClienteDt.razon}</li>
                                    <li>Rut Empresa: {store.infoClienteDt.rut}</li>
                                    <li>Nombre de Representante: {store.infoClienteDt.representante}</li>
                                    <li>Rut Representante: {store.infoClienteDt.rutRepresentante}</li>
                                    <li>Fecha Contratacion: {store.infoClienteDt.fechaContratacion}</li>
                                    <li className='no-print'>Erpyme: {store.infoClienteDt.erpyme}</li>
                                    <li className='no-print'>Vigente: {store.infoClienteDt.vigente}</li>
                                    <li>Correo: {store.infoClienteDt.correo}</li>
                                    <li>Fono: {store.infoClienteDt.fono}</li>
                                    <li>Saldo Pendiente: $</li>
                                    {/* <li>Saldo Pendiente: ${SaldoTotal.montoSaldo(store.infoClienteDt)}</li> */}
                                    <li className='no-print'>Monto a haber Pagado: $<SaldoTotal2 /></li>
                                </ul>
                            ) : (null)}
                </div>
            </div>
        </div>
    );
}

export default InformacionCliente;