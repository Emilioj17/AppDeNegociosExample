import React, { useState, useContext } from "react";
import { Context } from "../../../store/AppContext";
import { SaldoTotal } from "../../../Helper/SaldoTotal";

const InformacionCliente = () => {
	const { store, actions } = useContext(Context);

	const CalculoSaldo = () => {
		const SaldoDeberia = (meses = false) => {
			//Este saca la cantidad de meses y su valor, desde la fecha de Contratación. Es el DEBERIA
			const fecha = new Date(store.infoClienteDt.fechaContratacion);
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
			if (store.infoClienteDt.vigente === "Si") {
				if (
					store.pago2019 != null &&
					store.pago2020 != null &&
					store.pago2021 != null &&
					store.pago2022 != null &&
					store.pago2023 != null &&
					store.pago2024 != null &&
					meses == true
				) {
					let m2019 = store.pago2019.reduce((currentSum, number) => {
						return (currentSum += parseInt(number.montoPagado));
					}, 0);

					let m2020 = store.pago2020.reduce((currentSum, number) => {
						return (currentSum += parseInt(number.montoPagado));
					}, 0);

					let m2021 = store.pago2021.reduce((currentSum, number) => {
						return (currentSum += parseInt(number.montoPagado));
					}, 0);

					let m2022 = store.pago2022.reduce((currentSum, number) => {
						return (currentSum += parseInt(number.montoPagado));
					}, 0);

					let m2023 = store.pago2023.reduce((currentSum, number) => {
						return (currentSum += parseInt(number.montoPagado));
					}, 0);

					let m2024 = store.pago2024.reduce((currentSum, number) => {
						return (currentSum += parseInt(number.montoPagado));
					}, 0);

					return m2019 + m2020 + m2021 + m2022 + m2023 + m2024;
				}

				if (meses == false) {
					if (store.infoClienteDt.mesesPagados != null) {
						let mesesPagados = parseInt(store.infoClienteDt.mesesPagados);
						return mesesPagados;
					}
				}
			} else if (store.infoClienteDt.vigente === "No") {
				if (
					store.pago2019 != null &&
					store.pago2020 != null &&
					store.pago2021 != null &&
					store.pago2022 != null &&
					store.pago2023 != null &&
					store.pago2024 != null &&
					meses == true
				) {
					let cero = 0;
					return cero;
				}

				if (meses == false) {
					if (store.infoClienteDt.mesesPagados != null) {
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
	};

	/* 	const SaldoDeberia = (meses = false) => {
		//Este saca la cantidad de meses y su valor, desde la fecha de Contratación. Es el DEBERIA
		const fecha = new Date(store.infoClienteDt.fechaContratacion);
		const fechaHoy = new Date();
		const diferenciaMeses =
			fechaHoy.getMonth() -
			fecha.getMonth() +
			12 * (fechaHoy.getFullYear() - fecha.getFullYear());
		if (meses == true) {
			return (diferenciaMeses * 9900).toString();
		}
		return diferenciaMeses.toString();
	}; */

	/* 	const SaldoTotal = (meses) => {
		//Este recorre los años y saca los montos Pagados. Es el REAL.
		if (store.infoClienteDt.vigente === "Si") {
			if (
				store.pago2019 != null &&
				store.pago2020 != null &&
				store.pago2021 != null &&
				store.pago2022 != null &&
				store.pago2023 != null &&
				store.pago2024 != null &&
				meses == true
			) {
				let m2019 = store.pago2019.reduce((currentSum, number) => {
					return (currentSum += parseInt(number.montoPagado));
				}, 0);

				let m2020 = store.pago2020.reduce((currentSum, number) => {
					return (currentSum += parseInt(number.montoPagado));
				}, 0);

				let m2021 = store.pago2021.reduce((currentSum, number) => {
					return (currentSum += parseInt(number.montoPagado));
				}, 0);

				let m2022 = store.pago2022.reduce((currentSum, number) => {
					return (currentSum += parseInt(number.montoPagado));
				}, 0);

				let m2023 = store.pago2023.reduce((currentSum, number) => {
					return (currentSum += parseInt(number.montoPagado));
				}, 0);

				let m2024 = store.pago2024.reduce((currentSum, number) => {
					return (currentSum += parseInt(number.montoPagado));
				}, 0);

				return m2019 + m2020 + m2021 + m2022 + m2023 + m2024;
			}

			if (meses == false) {
				if (store.infoClienteDt.mesesPagados != null) {
					let mesesPagados = parseInt(store.infoClienteDt.mesesPagados);
					return mesesPagados;
				}
			}
		} else if (store.infoClienteDt.vigente === "No") {
			if (
				store.pago2019 != null &&
				store.pago2020 != null &&
				store.pago2021 != null &&
				store.pago2022 != null &&
				store.pago2023 != null &&
				store.pago2024 != null &&
				meses == true
			) {
				let cero = 0;
				return cero;
			}

			if (meses == false) {
				if (store.infoClienteDt.mesesPagados != null) {
					let cero = 0;
					return cero;
				}
			}
		}
	}; */

	return (
		<div className='cell small-6'>
			<div className='card' style={{ width: "99%" }}>
				<div className='card-divider no-print'>
					<h4>Informacion de Cliente</h4>
				</div>
				<div className='card-section'>
					{store.infoClienteDt != null ? (
						<ul className='no-bullet'>
							<li>Id:{store.infoClienteDt.id}</li>
							<li>Razon Social: {store.infoClienteDt.razon}</li>
							<li>Rut Empresa: {store.infoClienteDt.rut}</li>
							<li>
								Nombre de Representante: {store.infoClienteDt.representante}
							</li>
							<li>Rut Representante: {store.infoClienteDt.rutRepresentante}</li>
							<li>
								Fecha Contratacion: {store.infoClienteDt.fechaContratacion}
							</li>
							<li className='no-print'>Erpyme: {store.infoClienteDt.erpyme}</li>
							<li className='no-print'>
								Vigente: {store.infoClienteDt.vigente}
							</li>
							<li>Correo: {store.infoClienteDt.correo}</li>
							<li>Fono: {store.infoClienteDt.fono}</li>
							<li>Meses Pendientes: ${CalculoSaldo()}</li>
						</ul>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default InformacionCliente;
