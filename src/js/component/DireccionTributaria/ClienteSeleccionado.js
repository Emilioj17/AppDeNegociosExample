import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/AppContext";
import InformacionCliente from "./ClienteSeleccionado/InformacionCliente";
import Notas from "./ClienteSeleccionado/Notas";
import Pagos from "./ClienteSeleccionado/Pagos";
import ModificarClienteDt from "./ClienteSeleccionado/ModificarCliente/ModificarCliente";
import DetallePagos from "./ClienteSeleccionado/Pagos/DetallePagos";
import { AiFillPrinter } from "react-icons/ai";
import { IoRefreshSharp } from "react-icons/io5";

//Este es el Panel Principal tras haber Seleccionado a un Cliente desde ListaClientes.

const ClienteSeleccionado = ({
	setClienteSeleccionado,
	clienteDtCliqueado,
}) => {
	const { store, actions } = useContext(Context);
	const [detectorCambios, setDSetectorCambios] = useState(false); //Llama a los Pagos
	const [detectorCambiosNotas, setDSetectorCambiosNotas] = useState(false); //Llama a las Notas
	const [detectorCambiosInfo, setDetectorCambiosInfo] = useState(false); //Llama a la Info Básica
	const [modificarCliente, setModificarCliente] = useState(false); //Abre la ventana para Modificar los Datos del Cliente
	const [clickPagos, setClickPagos] = useState(false); //Abre los detalles de Pagos

	//Modificar esto, evitar tantas llamadas al bd.

	useEffect(() => {
		actions.getClienteDt(clienteDtCliqueado.id);
		actions.getNota(clienteDtCliqueado.id);
		actions.getPago2019(clienteDtCliqueado.id);
		actions.getPago2020(clienteDtCliqueado.id);
		actions.getPago2021(clienteDtCliqueado.id);
		actions.getPago2022(clienteDtCliqueado.id);
		actions.getPago2023(clienteDtCliqueado.id);
		actions.getPago2024(clienteDtCliqueado.id);
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (detectorCambios) {
			actions.getPago2019(clienteDtCliqueado.id);
			actions.getPago2020(clienteDtCliqueado.id);
			actions.getPago2021(clienteDtCliqueado.id);
			actions.getPago2022(clienteDtCliqueado.id);
			actions.getPago2023(clienteDtCliqueado.id);
			actions.getPago2024(clienteDtCliqueado.id);
			/* actions.getClientesDt(); */ //Revisar aquí, debería pasarle el numero de página.
			setDSetectorCambios(false);
		}
		if (detectorCambiosNotas) {
			actions.getNota(clienteDtCliqueado.id);
			setDSetectorCambiosNotas(false);
		}
	}, [detectorCambios, detectorCambiosNotas]);

	useEffect(() => {
		actions.getClienteDt(clienteDtCliqueado.id);
		setDetectorCambiosInfo(false);
	}, [detectorCambiosInfo]);

	const HandlerActualizar = (event) => {
		//Esta función Actualiza Informacion + Notas + Pago, si es que no se ha actualizado solo.
		actions.getClienteDt(clienteDtCliqueado.id);
		actions.getNota(clienteDtCliqueado.id);
		actions.getPago2019(clienteDtCliqueado.id);
		actions.getPago2020(clienteDtCliqueado.id);
		actions.getPago2021(clienteDtCliqueado.id);
		actions.getPago2022(clienteDtCliqueado.id);
		actions.getPago2023(clienteDtCliqueado.id);
		actions.getPago2024(clienteDtCliqueado.id);
	};

	const HandlerCerrar = (event) => {
		setClienteSeleccionado(false);
	};

	const HandlerModificarCliente = (event) => {
		setModificarCliente(true);
	};

	const HandlerEditarPagos = (event) => {
		setClickPagos(true);
	};

	const HandlerImpresion = (event) => {
		store.witch ? console.log("Hola") : actions.setWitch();
		setTimeout(() => {
			window.print();
		}, 200);
	};

	return (
		<div className='row yes-print'>
			{modificarCliente ? (
				<ModificarClienteDt
					setModificarCliente={setModificarCliente}
					clienteDtCliqueado={clienteDtCliqueado}
					setDetectorCambiosInfo={setDetectorCambiosInfo}
				/>
			) : null}
			{modificarCliente || clickPagos ? null : (
				<div className='callout' data-closable>
					<button
						className='close-button no-print'
						aria-label='Dismiss alert'
						type='button'
						data-close
						onClick={(e) => HandlerCerrar(e)}
					>
						<span aria-hidden='true'>×</span>
					</button>
					<br className='no-print' />
					<div className='grid-x no-print'>
						<div className='cell small-6'>
							{store.infoClienteDt != null ? (
								<h3>{store.infoClienteDt.razon.slice(0, 40)}</h3>
							) : null}
						</div>
						<div className='cell small-6 button-group align-right'>
							<button
								className='submit success button'
								onClick={(e) => HandlerActualizar(e)}
							>
								<IoRefreshSharp />
							</button>
							<button
								className='submit warning button'
								onClick={(e) => HandlerModificarCliente(e)}
							>
								Modificar Cliente
							</button>
							<button
								className='submit button warning'
								onClick={(e) => HandlerEditarPagos(e)}
							>
								Editar Pagos
							</button>
							<button
								className='submit secondary button'
								onClick={(e) => HandlerImpresion(e)}
							>
								Sacar Informe <AiFillPrinter />
							</button>
						</div>
					</div>
					<div className='grid-x'>
						<div className='cell small-12 print-yes text-center'>
							{store.infoClienteDt != null ? (
								<h3>{store.infoClienteDt.razon}</h3>
							) : null}
						</div>
						<div className='cell small-6 no-print'>
							<InformacionCliente />
						</div>
						<div className='cell small-8 print-yes'>
							<InformacionCliente />
						</div>
						<div className='cell small-4 print-yes'>
							<p>Por favor, realizar transferencias/pagos a:</p>
							<ul>
								<li>BANCO ESTADO</li>
								<li>Empresa: DeNegocios.cl SpA</li>
								<li>Rut: 76717904-9</li>
								<li>Chequera Electronica/Cuenta Vista</li>
								<li>N° Cuenta: 28670133798</li>
								<li>Correo: pagos@denegocios.cl</li>
							</ul>
							<p>
								Es importante notificar sus transferencias al correo de
								pagos@denegocios.cl. Le recomendamos enviar un correo
								electrónico a parte, indicando los datos básicos de su empresa
								para poder identificarle correctamente.
							</p>
						</div>
						<div className='cell small-6 no-print'>
							<Notas
								clienteDtCliqueado={clienteDtCliqueado}
								setDSetectorCambiosNotas={setDSetectorCambiosNotas}
							/>
						</div>
						<div className='cell'>
							<Pagos
								clienteDtCliqueado={clienteDtCliqueado}
								setClickPagos={setClickPagos}
								setDSetectorCambios={setDSetectorCambios}
							/>
						</div>
					</div>
				</div>
			)}
			{clickPagos ? (
				<DetallePagos
					setClickPagos={setClickPagos}
					setDSetectorCambios={setDSetectorCambios}
				/>
			) : null}
		</div>
	);
};

export default ClienteSeleccionado;
