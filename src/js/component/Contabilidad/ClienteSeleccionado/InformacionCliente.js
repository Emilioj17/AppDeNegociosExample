import React, { useState, useContext } from "react";
import { Context } from "../../../store/AppContext";
import { SaldoTotal } from "../../../Helper/SaldoTotal";

const InformacionCliente = () => {
	const { store, actions } = useContext(Context);

	/* 	const CalculoSaldo = () => {
		const SaldoDeberia = (meses = false) => {
			//Este saca la cantidad de meses y su valor, desde la fecha de Contratación. Es el DEBERIA
			const fecha = new Date(store.infoClienteContabilidad.fechaContratacion);
			const fechaHoy = new Date();
			let diferenciaMeses =
				fechaHoy.getMonth() -
				fecha.getMonth() +
				12 * (fechaHoy.getFullYear() - fecha.getFullYear());
			if (fechaHoy.getDate() < fecha.getDate()) {
				diferenciaMeses = diferenciaMeses - 1;
			}
			if (meses == true) {
				return (diferenciaMeses * 9900).toString();
			}
			return diferenciaMeses.toString();
		};

		const SaldoTotal = (meses) => {
			//Este recorre los años y saca los montos Pagados. Es el REAL.
			if (store.infoClienteContabilidad.vigente === "Si") {
				if (store.pagoContabilidad != null && meses == true) {
					let m2019 = store.pagoContabilidad.reduce((currentSum, number) => {
						return (currentSum += parseInt(number.montoPagado));
					}, 0);

					return m2019;
				}

				if (meses == false) {
					if (store.infoClienteContabilidad.mesesPagados != null) {
						let mesesPagados = parseInt(
							store.infoClienteContabilidad.mesesPagados
						);
						return mesesPagados;
					}
				}
			} else if (store.infoClienteContabilidad.vigente === "No") {
				if (store.pagoContabilidad != null && meses == true) {
					let cero = 0;
					return cero;
				}

				if (meses == false) {
					if (store.infoClienteContabilidad.mesesPagados != null) {
						let cero = 0;
						return cero;
					}
				}
			}
		};

		if (parseInt(SaldoDeberia(false)) - parseInt(SaldoTotal(false)) < 0) {
			return "Todo Pagado";
		} else {
			return (
				(parseInt(SaldoDeberia(false)) - parseInt(SaldoTotal(false))) * 9900
			);
		}
	}; */

	return (
		<div className='cell small-6'>
			<div className='card' style={{ width: "99%" }}>
				<div className='card-divider no-print'>
					<h4>Informacion de Cliente</h4>
				</div>
				<div className='card-section'>
					{store.infoClienteContabilidad != null ? (
						<ul className='no-bullet'>
							<li>Id:{store.infoClienteContabilidad.id}</li>
							<li>Razon Social: {store.infoClienteContabilidad.razon}</li>
							<li>Rut Empresa: {store.infoClienteContabilidad.rut}</li>
							<li className='no-print'>
								Erpyme: {store.infoClienteContabilidad.erpyme}
							</li>
							<li className='no-print'>
								Vigente: {store.infoClienteContabilidad.vigente}
							</li>
							<li>Correo: {store.infoClienteContabilidad.correo}</li>
							<li>Fono: {store.infoClienteContabilidad.fono}</li>
							<li>Meses Pendientes: $</li>
						</ul>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default InformacionCliente;
