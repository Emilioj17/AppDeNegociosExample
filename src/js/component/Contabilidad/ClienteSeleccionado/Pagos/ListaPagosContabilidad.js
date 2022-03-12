import React, { useState, useContext } from "react";
import { Context } from "../../../../store/AppContext";

const ListaPagosContabilidad = ({
	filtroYear,
	filtroMesInicio,
	filtroMesTermino,
	filtroSaldo,
}) => {
	const { store, actions } = useContext(Context);

	const ListaDesplegarPagos = (object, i, year) => {
		return (
			<tr key={i}>
				<td>{object.year}</td>
				<td>{object.mes}</td>
				<td>${object.montoCobrado}</td>
				<td>${object.montoPagado}</td>
				<td>${object.montoCobrado - object.montoPagado}</td>
				<td>{object.numeroTransferencia}</td>
				<td>{object.facturaNumero}</td>
			</tr>
		);
	};

	//Las siguientes lineas permiten hacer filtrado para el Rango de meses. Ojo a que aquí el .filter sobre
	// el store aplica si o si, no hay una versión de null. Quizás deba cambiar todo a esta forma o con funciones.
	let meses = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre",
	];
	let inicio;
	filtroMesInicio === "" || filtroMesInicio === "Desde este mes..."
		? (inicio = 0)
		: (inicio = meses.indexOf(filtroMesInicio));
	let final;
	filtroMesTermino === "" || filtroMesTermino === "Hasta este mes..."
		? (final = meses.length)
		: (final = meses.indexOf(filtroMesTermino));
	meses = meses.slice(inicio, final + 1);

	const Saldo = (objeto) => {
		if (filtroSaldo == "todos") {
			return objeto;
		} else if (filtroSaldo == "conSaldo") {
			if (
				objeto.montoCobrado - objeto.montoPagado > 0 ||
				objeto.montoCobrado - objeto.montoPagado < 0
			) {
				return objeto;
			}
		} else if (filtroSaldo == "sinSaldo") {
			if (objeto.montoCobrado - objeto.montoPagado == 0) {
				return objeto;
			}
		}
	};

	const Year = (objeto) => {
		if (filtroYear === "todos") {
			return objeto;
		} else if (filtroYear === "2019") {
			if (objeto.year === "2019") {
				return objeto;
			}
		} else if (filtroYear === "2020") {
			if (objeto.year === "2020") {
				return objeto;
			}
		} else if (filtroYear === "2021") {
			if (objeto.year === "2021") {
				return objeto;
			}
		} else if (filtroYear === "2022") {
			if (objeto.year === "2022") {
				return objeto;
			}
		} else if (filtroYear === "2023") {
			if (objeto.year === "2023") {
				return objeto;
			}
		} else if (filtroYear === "2024") {
			if (objeto.year === "2024") {
				return objeto;
			}
		}
	};

	return (
		<>
			<table className='table hover'>
				<thead>
					<tr>
						<th scope='col'>Año</th>
						<th scope='col'>Mes</th>
						<th scope='col'>Monto Cobrado</th>
						<th scope='col'>Monto Pagado</th>
						<th scope='col'>Saldo</th>
						<th scope='col'>Número de Transferencia</th>
						<th scope='col'>Número de Factura</th>
					</tr>
				</thead>
				<tbody>
					{store.pagoContabilidad != null
						? store.pagoContabilidad
								.filter((objeto) => Year(objeto))
								.filter((objeto) => meses.includes(objeto.mes))
								.filter((objeto) => Saldo(objeto))
								.map((object, i) => ListaDesplegarPagos(object, i, 2024))
						: null}
				</tbody>
				{store.infoClienteContabilidad == "" ? (
					<tbody>
						<p>No hay Informacion de Pagos...</p>
					</tbody>
				) : null}
			</table>
		</>
	);
};

export default ListaPagosContabilidad;
