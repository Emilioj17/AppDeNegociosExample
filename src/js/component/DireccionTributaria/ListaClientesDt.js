import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/AppContext";
/* import { SaldoTotal } from "../../Helper/SaldoTotal"; */
import "../../../styles/TablaClientes.css";

//Aquí se genera el Listado de Clientes que se muestra en Dt. Desde DireconTributaria.js se ejecuta el action que llama la info de la bd. Esta lista se guarda en store.clientesDt.
// Respecto al CSS del Paginator, se debió crear un .css adicional solo para setear los colores.

const ListaClientesDt = ({
	clienteDtBuscado,
	setClienteSeleccionado,
	setClienteDtCliqueado,
	colores,
	saldo,
}) => {
	const { store, actions } = useContext(Context);

	const HandlerClick = (object, event) => {
		if (event.target.className != "telefono") {
			setClienteDtCliqueado(object);
			setClienteSeleccionado(true);
		}
	};

	//La siguiente funcion despliega la lista de Clientes con sus respectivas Columnas.
	const ListaDesplegarClientes = (objeto, i) => {
		return (
			<tr
				className='trVistaAmpliada'
				key={i}
				onClick={(e) => HandlerClick(objeto, e)}
				style={colores ? { backgroundColor: Colores(objeto) } : null}
			>
				<td>{objeto.id}</td>
				<td>{objeto.razon}</td>
				<td>{objeto.rut}</td>
				<td>
					{objeto.correo}
					{objeto.correoSecundario === "" ? null : (
						<span>, {objeto.correoSecundario}</span>
					)}
					{objeto.correoTerciario === "" ? null : (
						<span>, {objeto.correoTerciario}</span>
					)}
				</td>
				<td className='telefono' style={{ cursor: "copy" }}>
					{objeto.fono}
				</td>
				<td>{objeto.fechaContratacion}</td>
				<td>{objeto.vigente}</td>
				<td>${CalculoSaldo(objeto, false)}</td>
			</tr>
		);
	};

	//Funciones para el Saldo

	const CalculoSaldo = (objeto, meses) => {
		//Hay que rehacer esta función, tiene varios elementos que ya NO se utilizan y están malos
		const SaldoDeberia = (objeto, meses = false) => {
			//Este saca la cantidad de meses y su valor, desde la fecha de Contratación. Es el DEBERIA
			const fecha = new Date(objeto.fechaContratacion);
			const fechaHoy = new Date();
			let diferenciaMeses =
				fechaHoy.getMonth() -
				fecha.getMonth() +
				12 * (fechaHoy.getFullYear() - fecha.getFullYear());
			if (fechaHoy.getDate() < fecha.getDate()) {
				diferenciaMeses = diferenciaMeses - 1;
			}
			return diferenciaMeses.toString();

			/* 			if (objeto.vigente === "Si") {
				const fecha = new Date(objeto.fechaContratacion);
				const fechaHoy = new Date();
				let diferenciaMeses =
					fechaHoy.getMonth() -
					fecha.getMonth() +
					12 * (fechaHoy.getFullYear() - fecha.getFullYear());
				if (fechaHoy.getDate() < fecha.getDate()) {
					diferenciaMeses = diferenciaMeses - 1;
				}
				return diferenciaMeses.toString();
			} else if (objeto.vigente === "No") {
				return 0;
			} */
		};

		const SaldoTotal = (objeto, meses) => {
			if (meses == false) {
				if (objeto.mesesPagados != null) {
					let mesesPagados = parseInt(objeto.mesesPagados);
					return mesesPagados;
				}
			}
			/* 			if (objeto.vigente === "Si") {
				if (meses == false) {
					if (objeto.mesesPagados != null) {
						let mesesPagados = parseInt(objeto.mesesPagados);
						return mesesPagados;
					}
				}
			} else if (objeto.vigente === "No") {
				return 0;
			} */
		};

		if (
			parseInt(SaldoDeberia(objeto, false)) -
				parseInt(SaldoTotal(objeto, false)) <
			0
		) {
			return "Pagado";
		} else {
			return (
				(parseInt(SaldoDeberia(objeto, false)) -
					parseInt(SaldoTotal(objeto, false))) *
				9900
			);
		}
	};

	const Saldo = (objeto) => {
		// Esta función permite Filtrar el Listado de Clientes, por si tienen Saldo o No.
		if (saldo == "Selecciona...") {
			return objeto;
		} else if (saldo == "Con Saldo") {
			if (CalculoSaldo(objeto, false) > 0 || CalculoSaldo(objeto, false) < 0) {
				return objeto;
			}
		} else if (saldo == "Sin Saldo") {
			if (CalculoSaldo(objeto, false) === 0) {
				return objeto;
			}
		}
	};

	// Funciones para los Colores
	const Colores = (objeto) => {
		if (colores === true) {
			if (objeto.p === "Si") {
				return "aqua";
			}
			if (objeto.vigente === "No") {
				return "red";
			}
			if (objeto.vigente === "Si" && CalculoSaldo(objeto, false) === 0) {
				return "lawnGreen";
			}
		}
	};

	return (
		<div className={store.witch ? "" : "grid-x grid-margin-x"}>
			{store.clientesDt != null ? (
				<table
					className={`table hover ${store.witch ? "tablaClientes" : ""}`}
					id='tblData'
				>
					<thead>
						<tr>
							<th className='id' scope='col'>
								Id
							</th>
							<th scope='col'>Razon Social</th>
							<th className='rut' scope='col'>
								Rut
							</th>
							<th scope='col'>Correo</th>
							<th className='telefono' scope='col'>
								Teléfono
							</th>
							<th className='fecha' scope='col'>
								Fecha
							</th>
							<th scope='col'>Vigente</th>
							<th className='saldo' scope='col'>
								Saldo
							</th>
						</tr>
					</thead>
					<tbody>
						{store.clientesDt != null ? (
							store.clientesDt
								.filter((objeto) => Saldo(objeto))
								.map((objeto, i) => ListaDesplegarClientes(objeto, i))
						) : (
							<td colSpan='9' style={{ height: "100px", padding: "20px" }}>
								<h2 className='text-center'> - no hay datos -</h2>
							</td>
						)}
					</tbody>
				</table>
			) : null}
		</div>
	);
};

export default ListaClientesDt;
