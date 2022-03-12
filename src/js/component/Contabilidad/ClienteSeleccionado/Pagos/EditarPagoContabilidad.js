import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../../store/AppContext";
import { FiAlertOctagon } from "react-icons/fi";

//Este Formulario es para Edición de Pagos de Contabilidad.
/*  ****setPagoSeleccionado abre y cierra las ventanasde editar y borrar pago. Modificar a Futuro*/

const EditarPagoContabilidad = ({
	pagoSeleccionado,
	setPagoSeleccionado,
	setDSetectorCambios,
	setDisabled,
}) => {
	const { store, actions } = useContext(Context);
	const [datos, setDatos] = useState({
		year: "",
		mes: "",
		montoCobrado: "",
		montoPagado: "",
		mesesPagados: "",
		numeroTransferencia: "",
		facturaNumero: "",
		comentario: "",
	});

	useEffect(() => {
		actions.getClienteContabilidad(store.infoClienteContabilidad.id);
	}, []);

	const HandlerCerrar = (event) => {
		setDisabled(false);
		setPagoSeleccionado({
			object: null,
			year: null,
		});
	};

	const HandlerEditarPago = (event) => {
		if (Object.values(datos).every((x) => x === null)) {
			alert("No estas Modificando ningún Dato");
		} else {
			actions.editarPagoContabilidad(
				datos.year,
				datos.mes,
				datos.numeroTransferencia,
				datos.montoPagado,
				datos.montoCobrado,
				datos.facturaNumero,
				datos.comentario,
				pagoSeleccionado.object.id
			);
			setDSetectorCambios(true);
			setTimeout(() => {
				setPagoSeleccionado({
					object: null,
					year: null,
				});
			}, 200);
			setDisabled(false);
		}
	};

	const HandlerCompletarDatos = (event) => {
		if (event.target.value === "Selecciona una opción...") {
			setDatos({ ...datos, [event.target.name]: null });
		} else {
			setDatos({ ...datos, [event.target.name]: event.target.value });
		}
	};

	/*     const HandlerCompletarDatosMesesPagados = (event) => {
        setMesesPagados(event.target.value)

        if (event.target.value === "") {
            setMesesPagados(null)
        }
    }; */

	return (
		<div className='DivTerciario text-center'>
			<div className='card'>
				<h4>
					Vas a Editar un Pago del{" "}
					<strong>{pagoSeleccionado.object.year}</strong>
				</h4>
				<div className='card-divider'>
					<label className='form-label text-left' htmlFor='mes'>
						Año: <strong>{pagoSeleccionado.object.year}</strong>
						<select
							className='form-select'
							id='year'
							name='year'
							onChange={(e) => HandlerCompletarDatos(e)}
						>
							<option>Seleciona...</option>
							<option value='2019'>2019</option>
							<option value='2020'>2020</option>
							<option value='2021'>2021</option>
							<option value='2022'>2022</option>
							<option value='2023'>2023</option>
							<option value='2024'>2024</option>
						</select>
					</label>
					<label className='form-label text-left' htmlFor='mes'>
						Mes: <strong>{pagoSeleccionado.object.mes}</strong>
						<select
							className='form-select'
							id='mes'
							name='mes'
							onChange={(e) => HandlerCompletarDatos(e)}
						>
							<option>Selecciona una opción...</option>
							<option value='Enero'>Enero</option>
							<option value='Febrero'>Febrero</option>
							<option value='Marzo'>Marzo</option>
							<option value='Abril'>Abril</option>
							<option value='Mayo'>Mayo</option>
							<option value='Junio'>Junio</option>
							<option value='Julio'>Julio</option>
							<option value='Agosto'>Agosto</option>
							<option value='Septiembre'>Septiembre</option>
							<option value='Octubre'>Octubre</option>
							<option value='Noviembre'>Noviembre</option>
							<option value='Diciembre'>Diciembre</option>
						</select>
					</label>
					<label className='form-label text-left' htmlFor='montoCobrado'>
						Cobrado:$<strong>{pagoSeleccionado.object.montoCobrado}</strong>
						<input
							type='number'
							placeholder='Puedes cambiar $'
							name='montoCobrado'
							onChange={(e) => HandlerCompletarDatos(e)}
						/>
					</label>
				</div>
				<div className='card-divider'>
					<label className='form-label text-left' htmlFor='montoPagado'>
						Pagado: $<strong>{pagoSeleccionado.object.montoPagado}</strong>
						<input
							type='number'
							placeholder='Puedes cambiar $'
							name='montoPagado'
							onChange={(e) => HandlerCompletarDatos(e)}
						/>
					</label>
					<label className='form-label text-left' htmlFor='numeroTransferencia'>
						N° Transf:{" "}
						<strong>
							{pagoSeleccionado.object.numeroTransferencia
								? pagoSeleccionado.object.numeroTransferencia
								: "No hay"}
						</strong>
						<input
							type='text'
							name='numeroTransferencia'
							placeholder='Puedes Cambiar esto'
							onChange={(e) => HandlerCompletarDatos(e)}
						/>
					</label>
					<label className='form-label text-left' htmlFor='facturaNumero'>
						N° Factura:{" "}
						<strong>
							{pagoSeleccionado.object.facturaNumero
								? pagoSeleccionado.object.facturaNumero
								: "No hay"}
						</strong>
						<input
							type='text'
							name='facturaNumero'
							placeholder='Cambia el N°'
							onChange={(e) => HandlerCompletarDatos(e)}
						/>
					</label>
				</div>
				<div className='card-divider align-center'>
					<label htmlFor='fechaPago'>
						Comentario:{" "}
						<strong>
							{pagoSeleccionado.object.comentario
								? pagoSeleccionado.object.comentario
								: "No hay"}
						</strong>
						<textarea
							cols='50'
							rows='1'
							maxLength='100'
							placeholder='Puedes modificar el comentario'
							name='comentario'
							onChange={(e) => HandlerCompletarDatos(e)}
						></textarea>
					</label>
				</div>
				<div>
					<h3>
						<FiAlertOctagon /> Vas a modificar un Pago
					</h3>
				</div>
				<div className='button-group align-center card-divider'>
					<button
						className='submit button warning'
						onClick={(e) => HandlerEditarPago(e)}
					>
						Editar Pago
					</button>
					<button className='submit button' onClick={(e) => HandlerCerrar(e)}>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditarPagoContabilidad;
