import React, { useContext, useEffect } from "react";
import { Context } from "../../store/AppContext";
import { FiAlertOctagon } from "react-icons/fi";
import "../../../styles/FiltroListaClientes.css";

//Este es el Filtro de la Lista de Clientes de Contabilidad

const FiltroListaClientesContabilidad = ({
	filtros,
	setFiltros,
	saldo,
	setSaldo,
}) => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (Object.values(filtros).every((x) => x === "Selecciona...")) {
			console.log("Nope");
		} else {
			actions.getBusquedaFiltroContabilidad(
				filtros.vigente,
				filtros.whatsapp,
				filtros.erpyme,
				filtros.dicom,
				filtros.repetido
			);
		}
	}, [filtros]);

	const HandlerFiltros = (event) => {
		if (
			filtros ===
			{
				vigente: "Selecciona...",
				whatsapp: "Selecciona...",
				erpyme: "Selecciona...",
				dicom: "Selecciona...",
				repetido: "Selecciona...",
			}
		) {
			console.log("Hola");
		}

		if (
			filtros !=
			{
				vigente: "Selecciona...",
				whatsapp: "Selecciona...",
				erpyme: "Selecciona...",
				dicom: "Selecciona...",
				repetido: "Selecciona...",
			}
		) {
			if (event.target.name === "vigente") {
				setFiltros({
					vigente: event.target.value,
					whatsapp: "Selecciona...",
					erpyme: "Selecciona...",
					dicom: "Selecciona...",
					repetido: "Selecciona...",
				});
				setSaldo("Selecciona...");
			}
			if (event.target.name === "whatsapp") {
				setFiltros({
					vigente: "Selecciona...",
					whatsapp: event.target.value,
					erpyme: "Selecciona...",
					dicom: "Selecciona...",
					repetido: "Selecciona...",
				});
				setSaldo("Selecciona...");
			}
			if (event.target.name === "erpyme") {
				setFiltros({
					vigente: "Selecciona...",
					whatsapp: "Selecciona...",
					erpyme: event.target.value,
					dicom: "Selecciona...",
					repetido: "Selecciona...",
				});
				setSaldo("Selecciona...");
			}
			if (event.target.name === "dicom") {
				setFiltros({
					vigente: "Selecciona...",
					whatsapp: "Selecciona...",
					erpyme: "Selecciona...",
					dicom: event.target.value,
					repetido: "Selecciona...",
				});
				setSaldo("Selecciona...");
			}
			if (event.target.name === "repetido") {
				setFiltros({
					vigente: "Selecciona...",
					whatsapp: "Selecciona...",
					erpyme: "Selecciona...",
					dicom: "Selecciona...",
					repetido: event.target.value,
				});
				setSaldo("Selecciona...");
			}
			if (event.target.name === "saldo") {
				setFiltros({
					vigente: "Selecciona...",
					whatsapp: "Selecciona...",
					erpyme: "Selecciona...",
					dicom: "Selecciona...",
					repetido: "Selecciona...",
				});
				setSaldo("Selecciona...");
			}
		}
	};

	const HandlerObtenerSaldo = (event) => {
		setSaldo(event.target.value);
	};

	const HandlerResetFiltros = (event) => {
		setFiltros({
			vigente: "Selecciona...",
			whatsapp: "Selecciona...",
			erpyme: "Selecciona...",
			dicom: "Selecciona...",
			repetido: "Selecciona...",
		});
		setSaldo("Selecciona...");
		actions.getClientesContabilidad(1);
	};

	return (
		<div className='row'>
			<div className='no-print'>
				<div className='filtroGrid'>
					<label htmlFor='filtroVigente'>
						Vigencia
						<select
							className='form-select'
							id='filtroVigente'
							name='vigente'
							value={filtros["vigente"]}
							onChange={(e) => HandlerFiltros(e)}
						>
							<option>Selecciona...</option>
							<option value='Si'>Si</option>
							<option value='No'>No</option>
						</select>
					</label>
					<label htmlFor='filtroWhatsapp'>
						WhatSapp
						<select
							className='form-select'
							id='filtroWhatsapp'
							name='whatsapp'
							value={filtros["whatsapp"]}
							onChange={(e) => HandlerFiltros(e)}
						>
							<option>Selecciona...</option>
							<option value='Si'>Si</option>
							<option value='No'>No</option>
						</select>
					</label>
					<label htmlFor='filtroErpyme'>
						Erpyme
						<select
							className='form-select'
							id='filtroErpyme'
							name='erpyme'
							value={filtros["erpyme"]}
							onChange={(e) => HandlerFiltros(e)}
						>
							<option>Selecciona...</option>
							<option value='Si'>Si</option>
							<option value='No'>No</option>
						</select>
					</label>
					<label htmlFor='filtroDicom'>
						Dicom
						<select
							className='form-select'
							id='filtroDicom'
							name='dicom'
							value={filtros["dicom"]}
							onChange={(e) => HandlerFiltros(e)}
						>
							<option>Selecciona...</option>
							<option value='Si'>Si</option>
							<option value='No'>No</option>
						</select>
					</label>
					<label htmlFor='filtroRepetido'>
						Repetido
						<select
							className='form-select'
							id='filtroRepetido'
							name='repetido'
							value={filtros["repetido"]}
							onChange={(e) => HandlerFiltros(e)}
						>
							<option>Selecciona...</option>
							<option value='Si'>Si</option>
							<option value='No'>No</option>
						</select>
					</label>
					<label htmlFor='filtroSaldo'>
						Saldo <span style={{ color: "red" }}>*Segundo Filtro*</span>
						<select
							className='form-select'
							id='filtroSaldo'
							name='saldo'
							value={saldo}
							onChange={(e) => HandlerObtenerSaldo(e)}
						>
							<option>Selecciona...</option>
							<option value='Con Saldo'>Con Saldo</option>
							<option value='Sin Saldo'>Sin Saldo</option>
						</select>
					</label>

					{filtros.vigente != "Selecciona..." ||
					filtros.whatsapp != "Selecciona..." ||
					filtros.erpyme != "Selecciona..." ||
					filtros.dicom != "Selecciona..." ||
					filtros.repetido != "Selecciona..." ||
					filtros.saldo != "Selecciona..." ? (
						<div className='alertFiltro'>
							<FiAlertOctagon />
							&nbsp; &nbsp;Hay Filtros Aplicados{" "}
							<a
								className='clear button warning align-right'
								onClick={(e) => HandlerResetFiltros(e)}
							>
								reset filtros
							</a>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default FiltroListaClientesContabilidad;
