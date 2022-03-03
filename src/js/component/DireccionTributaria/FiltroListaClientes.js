import React, { useState } from "react";
import { FiAlertOctagon } from "react-icons/fi";
import "../../../styles/FiltroListaClientes.css";

//Este es el Filtro de la Lista de Clientes de DT

const FiltroListaClientes = () => {
	const [filtroVigente, setFiltroVigente] = useState("Selecciona...");
	const [filtroWhatsapp, setFiltroWhatsapp] = useState("Selecciona...");
	const [filtroErpyme, setFiltroErpyme] = useState("Selecciona...");
	const [filtroP, setFiltroP] = useState("Selecciona...");
	const [filtroSacar, setFiltroSacar] = useState("Selecciona...");
	const [filtroDicom, setFiltroDicom] = useState("Selecciona...");
	const [filtroRepetido, setFiltroRepetido] = useState("Selecciona...");
	const [filtroTipoPago, setFiltroTipoPago] = useState("Selecciona...");
	const [filtroSaldo, setFiltroSaldo] = useState("Selecciona...");

	const HandlerFiltros = (event) => {
		console.log(event.target.name);
	};

	const HandlerResetFiltros = (event) => {};

	return (
		<div className='row'>
			<div className='no-print'>
				<div className='filtroGrid'>
					<label htmlFor='filtroVigente'>
						Vigencia
						<select
							className='form-select'
							id='filtroVigente'
							name='filtroVigente'
							defaultValue={filtroVigente}
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
							name='filtroWhatsapp'
							defaultValue={filtroWhatsapp}
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
							name='filtroErpyme'
							defaultValue={filtroErpyme}
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
							name='filtroP'
							defaultValue={filtroP}
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
							name='filtroSacar'
							defaultValue={filtroSacar}
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
							name='filtroDicom'
							defaultValue={filtroDicom}
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
							name='filtroRepetido'
							defaultValue={filtroRepetido}
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
							name='filtroTipoPago'
							defaultValue={filtroTipoPago}
							onChange={(e) => HandlerFiltros(e)}
						>
							<option>Selecciona...</option>
							<option value='Si'>Si</option>
							<option value='No'>No</option>
						</select>
					</label>
					{filtroVigente != "Selecciona..." ||
					filtroWhatsapp != "Selecciona..." ||
					filtroErpyme != "Selecciona..." ||
					filtroP != "Selecciona..." ||
					filtroSacar != "Selecciona..." ||
					filtroDicom != "Selecciona..." ||
					filtroRepetido != "Selecciona..." ||
					filtroTipoPago != "Selecciona..." ||
					filtroSaldo != "Selecciona..." ? (
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
