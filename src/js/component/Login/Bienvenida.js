import React, { useContext } from "react";
import { Context } from "../../store/AppContext";

const Bienvenida = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className='row'>
			<div className='column'>
				<h2>Hola {store.usuarioActual.nombre}, Bienvenido.</h2>
				<hr />
				<br />
				<div className='grid-x'>
					<div className='cell small-6'>
						<h5>Informaciones Varias</h5>
						<br />
						<div className='grid-x'>
							<h6 className='cell small-12'>Busca tu Liquidacion de Sueldo</h6>
							<label className='cell small-8'>
								Selecciona Periodo
								<select disabled>
									<option value='husker'>Noviembre 2021</option>
									<option value='starbuck'>Diciembre 2021</option>
									<option value='hotdog'>Enero 2022</option>
									<option value='apollo'>Febrero 2022</option>
								</select>
							</label>
						</div>
						<a className='button' disabled>
							Obtener Liquidacion
						</a>
						<br />
						<br />
						<h6>Obten Copia Digital de tu Contrato</h6>
						<a className='isDisabled'>Clic aquí para contrato</a>
						<br />
						<br />
						<br />
					</div>
					<div className='cell small-6'>
						<h5>Links de Interés</h5>
						<br />
						<ul>
							<li>
								<a
									href='https://denegocios.cl/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Página de DeNegocios.cl
								</a>
							</li>
							<li>
								<a
									href='https://zeus.sii.cl/cvc/stc/stc.html'
									target='_blank'
									rel='noopener noreferrer'
								>
									Informacion de Terceros (SII)
								</a>
							</li>
							<li>
								<a
									href='https://www4.sii.cl/busquedarolesinternetui/#!/busquedaroles'
									target='_blank'
									rel='noopener noreferrer'
								>
									Buscar Rol de una Propiedad
								</a>
							</li>
							<li>
								<a
									href='https://tramites.munistgo.cl/pagopatente/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Consultar Pantente Municipal Santiago
								</a>
							</li>
							<li>
								<a
									href='https://www.registrocivil.cl/principal/servicios-en-linea/consulta-vigencia-documento-1'
									target='_blank'
									rel='noopener noreferrer'
								>
									Revisar Vigencia Cédula Identidad
								</a>
							</li>
							<li>
								<a
									href='https://www.sii.cl/ayudas/ayudas_por_servicios/1956-codigos-1959.html'
									target='_blank'
									rel='noopener noreferrer'
								>
									Códigos/Giros del SII
								</a>
							</li>
							<li>
								<a
									href='https://www.registrodeempresasysociedades.cl/ObtenerCertificadosHome.aspx'
									target='_blank'
									rel='noopener noreferrer'
								>
									Obtener Documentos Empresa en 1 Día
								</a>
							</li>
							<li>
								<a
									href='https://conservador.cl/portal/indice_comercio'
									target='_blank'
									rel='noopener noreferrer'
								>
									Registro de Comercio de Santiago (Tradicionales)
								</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className='container-fluid grid-x'>
					<div className='cell small-7'>
						<h5>Calendario</h5>
						<br />
						<br />
						<br />
						<br />
						<br />
					</div>
					<div className='cell small-3' style={{ marginLeft: "20px" }}>
						<h5>Fechas Importantes</h5>
						<br />
						<ul>
							<li>
								<h6>Dia 13:</h6>
								<p>Fecha Máxima Pago Previred</p>
							</li>
							<li>
								<h6>Dia 20:</h6>
								<p>Fecha Máxima Pago Impuestos al SII</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bienvenida;
