import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../store/AppContext";
import "../../../styles/TablaClientes.css";

//Aquí se genera el Listado de Clientes que se muestra en Contabilidad. Desde Contabilidad.js se ejecuta el action que llama la info de la bd. Esta lista se guarda en store.clientesContabilidad.
// Respecto al CSS del Paginator, se debió crear un .css adicional solo para setear los colores.

const ListaClientesContabilidad = ({
	setClienteSeleccionado,
	setClienteContabilidadCliqueado,
	colores,
	saldo,
}) => {
	const { store, actions } = useContext(Context);

	const HandlerClick = (object, event) => {
		//Esto permite filtrar por saldo (filtro)
		if (event.target.className != "telefono") {
			setClienteContabilidadCliqueado(object);
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
				<td>{objeto.vigente}</td>
				<td>
					$
					{objeto.pagosContabilidadID != undefined
						? CalculoSaldo(objeto, false)
						: null}
				</td>
			</tr>
		);
	};

	//Funcion para el Saldo
	const CalculoSaldo = (objeto, meses) => {
		let montoPagado = 0;
		let montoCobrado = 0;
		for (let index = 0; index < objeto.pagosContabilidadID.length; index++) {
			montoPagado =
				montoPagado + parseInt(objeto.pagosContabilidadID[index].montoPagado);
			montoCobrado =
				montoCobrado + parseInt(objeto.pagosContabilidadID[index].montoCobrado);
		}
		return montoCobrado - montoPagado;
	};

	// Esta función permite Filtrar el Listado de Clientes, por si tienen Saldo o No.
	const Saldo = (objeto) => {
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
			{store.clientesContabilidad != null ? (
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
							<th scope='col'>Vigente</th>
							<th className='saldo' scope='col'>
								Saldo
							</th>
						</tr>
					</thead>
					<tbody>
						{store.clientesContabilidad != null ? (
							store.clientesContabilidad
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

export default ListaClientesContabilidad;
