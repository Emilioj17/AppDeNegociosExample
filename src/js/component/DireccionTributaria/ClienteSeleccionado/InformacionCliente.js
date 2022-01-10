import React, { useState, useContext } from 'react';
import { SaldoTotal } from "../../../Helper/SaldoTotal";


const InformacionCliente = ({ clienteDtCliqueado }) => {

    return (
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
                        <li>Correo: {clienteDtCliqueado.correo}</li>
                        <li>Fono: {clienteDtCliqueado.fono}</li>
                        <li>Saldo Pendiente: ${SaldoTotal.montoSaldo(clienteDtCliqueado)}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InformacionCliente;