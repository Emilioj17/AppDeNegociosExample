import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Bienvenida.css"

export const Bienvenida = () => {
	return (
		<div className="container principalBienvenida">
			<div className="d-flex align-items-center m-1 border border-dark" style={{ width: "18rem;" }}>
				<div className="card-body">
					<h5 className="card-title">Generador de Documentos</h5>
					<p className="card-text">Puedes Generar: Contratos de Arriendo, Contrado de Contabilidad, Poderes para SII y Municipalidad.</p>
					<Link to="/GeneradorDocumentos" className="btn btn-primary">Ir al Generador de Documentos</Link>
				</div>
			</div>
			<div className="d-flex align-items-center m-1 border border-dark" style={{ width: "18rem;" }}>
				<div className="card-body">
					<h5 className="card-title">Servicio de D. Tributaria</h5>
					<p className="card-text">Acceder a Plataforma de Direccion Tributaria. Revisar Pagos. Listado de Clientes.</p>
					<Link to="#" className="btn btn-primary disabled">Ir a D.T.</Link>
				</div>
			</div>
			<div className="d-flex align-items-center m-1 border border-dark" style={{ width: "18rem;" }}>
				<div className="card-body">
					<h5 className="card-title">Servicio de Contabilidad</h5>
					<p className="card-text">Acceder a Plataforma de Servicio de Contabilidad. Revisar Pagos. Listado de Clientes.</p>
					<Link to="#" className="btn btn-primary disabled">Ir a Contabilidad</Link>
				</div>
			</div>
			<div className="d-flex align-items-center m-1 border border-dark" style={{ width: "18rem;" }}>
				<div className="card-body">
					<h5 className="card-title">Generador de Escrituras P.</h5>
					<p className="card-text">Escrituras Publicas y Extractos. Documentación Legal para Constitución de Empresas.</p>
					<Link to="#" className="btn btn-primary disabled">Ir a Generador de Escrituras</Link>
				</div>
			</div>
		</div>
	)
};