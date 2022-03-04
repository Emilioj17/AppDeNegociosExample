import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/AppContext";
import { FiAlertOctagon } from "react-icons/fi";
import "../../../styles/FiltroListaClientes.css";

//Este es el Filtro de la Lista de Clientes de DT

const FiltroListaClientes = ({ filtros, setFiltros }) => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if (Object.values(filtros).every((x) => x === "Selecciona...")) {
			console.log("Nope");
		} else {
			actions.getBusquedaFiltroDt(
				filtros.vigente,
				filtros.whatsapp,
				filtros.erpyme,
				filtros.p,
				filtros.sacar,
				filtros.dicom,
				filtros.repetido,
				filtros.tipoPago
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
				p: "Selecciona...",
				sacar: "Selecciona...",
				dicom: "Selecciona...",
				repetido: "Selecciona...",
				tipoPago: "Selecciona...",
				saldo: "Selecciona...",
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
				p: "Selecciona...",
				sacar: "Selecciona...",
				dicom: "Selecciona...",
				repetido: "Selecciona...",
				tipoPago: "Selecciona...",
				saldo: "Selecciona...",
			}
		) {
			if (event.target.name === "vigente") {
				setFiltros({
					vigente: event.target.value,
					whatsapp: "Selecciona...",
					erpyme: "Selecciona...",
					p: "Selecciona...",
					sacar: "Selecciona...",
					dicom: "Selecciona...",
					repetido: "Selecciona...",
					tipoPago: "Selecciona...",
					saldo: "Selecciona...",
				});
			}
			if (event.target.name === "whatsapp") {
				setFiltros({
					vigente: "Selecciona...",
					whatsapp: event.target.value,
					erpyme: "Selecciona...",
					p: "Selecciona...",
					sacar: "Selecciona...",
					dicom: "Selecciona...",
					repetido: "Selecciona...",
					tipoPago: "Selecciona...",
					saldo: "Selecciona...",
				});
			}
			if (event.target.name === "erpyme") {
				setFiltros({
					vigente: "Selecciona...",
					whatsapp: "Selecciona...",
					erpyme: event.target.value,
					p: "Selecciona...",
					sacar: "Selecciona...",
					dicom: "Selecciona...",
					repetido: "Selecciona...",
					tipoPago: "Selecciona...",
					saldo: "Selecciona...",
				});
			}
			if (event.target.name === "p") {
				setFiltros({
					vigente: "Selecciona...",
					whatsapp: "Selecciona...",
					erpyme: "Selecciona...",
					p: event.target.value,
					sacar: "Selecciona...",
					dicom: "Selecciona...",
					repetido: "Selecciona...",
					tipoPago: "Selecciona...",
					saldo: "Selecciona...",
				});
			}
			if (event.target.name === "sacar") {
				setFiltros({
					vigente: "Selecciona...",
					whatsapp: "Selecciona...",
					erpyme: "Selecciona...",
					p: "Selecciona...",
					sacar: event.target.value,
					dicom: "Selecciona...",
					repetido: "Selecciona...",
					tipoPago: "Selecciona...",
					saldo: "Selecciona...",
				});
			}
			if (event.target.name === "dicom") {
				setFiltros({
					vigente: "Selecciona...",
					whatsapp: "Selecciona...",
					erpyme: "Selecciona...",
					p: "Selecciona...",
					sacar: "Selecciona...",
					dicom: event.target.value,
					repetido: "Selecciona...",
					tipoPago: "Selecciona...",
					saldo: "Selecciona...",
				});
			}
			if (event.target.name === "repetido") {
				setFiltros({
					vigente: "Selecciona...",
					whatsapp: "Selecciona...",
					erpyme: "Selecciona...",
					p: "Selecciona...",
					sacar: "Selecciona...",
					dicom: "Selecciona...",
					repetido: event.target.value,
					tipoPago: "Selecciona...",
					saldo: "Selecciona...",
				});
			}
			if (event.target.name === "tipoPago") {
				setFiltros({
					vigente: "Selecciona...",
					whatsapp: "Selecciona...",
					erpyme: "Selecciona...",
					p: "Selecciona...",
					sacar: "Selecciona...",
					dicom: "Selecciona...",
					repetido: "Selecciona...",
					tipoPago: event.target.value,
					saldo: "Selecciona...",
				});
			}
			if (event.target.name === "saldo") {
				setFiltros({
					vigente: "Selecciona...",
					whatsapp: "Selecciona...",
					erpyme: "Selecciona...",
					p: "Selecciona...",
					sacar: "Selecciona...",
					dicom: "Selecciona...",
					repetido: "Selecciona...",
					tipoPago: "Selecciona...",
					saldo: event.target.value,
				});
			}
		}
	};

	const HandlerResetFiltros = (event) => {
		setFiltros({
			vigente: "Selecciona...",
			whatsapp: "Selecciona...",
			erpyme: "Selecciona...",
			p: "Selecciona...",
			sacar: "Selecciona...",
			dicom: "Selecciona...",
			repetido: "Selecciona...",
			tipoPago: "Selecciona...",
			saldo: "Selecciona...",
		});
		actions.getClientesDt(1);
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
					<label htmlFor='filtroP'>
						P
						<select
							className='form-select'
							id='filtroP'
							name='p'
							value={filtros["p"]}
							onChange={(e) => HandlerFiltros(e)}
						>
							<option>Selecciona...</option>
							<option value='Si'>Si</option>
							<option value='No'>No</option>
						</select>
					</label>
					<label htmlFor='filtroSacar'>
						Sacar
						<select
							className='form-select'
							id='filtroSacar'
							name='sacar'
							value={filtros["sacar"]}
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
					<label htmlFor='filtroTipoPago'>
						tipoPago
						<select
							className='form-select'
							id='filtroTipoPago'
							name='tipoPago'
							value={filtros["tipoPago"]}
							onChange={(e) => HandlerFiltros(e)}
						>
							<option>Selecciona...</option>
							<option value='Mensual'>Mensual</option>
							<option value='Anual'>Anual</option>
						</select>
					</label>
					{filtros.vigente != "Selecciona..." ||
					filtros.whatsapp != "Selecciona..." ||
					filtros.erpyme != "Selecciona..." ||
					filtros.p != "Selecciona..." ||
					filtros.sacar != "Selecciona..." ||
					filtros.dicom != "Selecciona..." ||
					filtros.repetido != "Selecciona..." ||
					filtros.tipoPago != "Selecciona..." ||
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

export default FiltroListaClientes;
