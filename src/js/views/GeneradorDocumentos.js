import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Bienvenida.css"

export const GeneradorDocumentos = () => {
	return (
		<div className="container principalBienvenida">
			<div className="d-flex align-items-center m-1 border border-dark" style={{ width: "18rem;" }}>
				<div className="card-body">
					<h5 className="card-title">Poder para el SII</h5>
					<p className="card-text">Documento Poder que Faculta a DeNegocios.cl a realizar una serie de procesos ante el SII.</p>
					<Link to="/PoderSII" className="btn btn-primary">Ir a Poder SII</Link>
				</div>
			</div>
			<div className="d-flex align-items-center m-1 border border-dark" style={{ width: "18rem;" }}>
				<div className="card-body">
					<h5 className="card-title">Poder Municipal</h5>
					<p className="card-text">Documento Poder que Faculta a DeNegocios.cl a realizar una serie de procesos ante la Municipalidad.</p>
					<Link to="/PoderMunicipal" className="btn btn-primary">Ir a Poder Municipal</Link>
				</div>
			</div>
			<div className="d-flex align-items-center m-1 border border-dark" style={{ width: "18rem;" }}>
				<div className="card-body">
					<h5 className="card-title">Contrato Arriendo Mensual</h5>
					<p className="card-text">Acceder a Plataforma de Servicio de Contabilidad. Revisar Pagos. Listado de Clientes.</p>
					<Link to="#" className="btn btn-primary disabled">Ir a Contrato Dt Mensual</Link>
				</div>
			</div>
			<div className="d-flex align-items-center m-1 border border-dark" style={{ width: "18rem;" }}>
				<div className="card-body">
					<h5 className="card-title">Contrato Arriendo 1 Año</h5>
					<p className="card-text">Escrituras Publicas y Extractos. Documentación Legal para Constitución de Empresas.</p>
					<Link to="#" className="btn btn-primary disabled">Ir a Contrato Dt Anual</Link>
				</div>
			</div>
			<div className="d-flex align-items-center m-1 border border-dark" style={{ width: "18rem;" }}>
				<div className="card-body">
					<h5 className="card-title">Contrato Arriendo 30 dias Gratis</h5>
					<p className="card-text">Escrituras Publicas y Extractos. Documentación Legal para Constitución de Empresas.</p>
					<Link to="#" className="btn btn-primary disabled">Ir a Contrato Dt 30 dias</Link>
				</div>
			</div>
			<div className="d-flex align-items-center m-1 border border-dark" style={{ width: "18rem;" }}>
				<div className="card-body">
					<h5 className="card-title">Contrato de Contabilidad</h5>
					<p className="card-text">Escrituras Publicas y Extractos. Documentación Legal para Constitución de Empresas.</p>
					<Link to="#" className="btn btn-primary disabled">Ir a Contrato Contabilidad</Link>
				</div>
			</div>
		</div>
	)
};