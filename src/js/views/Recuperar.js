import React, { Fragment } from "react";
import Head from "../component/Head";
import '../../styles/App.css';

export const Recuperar = () => {
	const titulosHead = ["Bienvenido a Administracion DeNegocios.cl", "Esta opción te permitirá recuperar tu Cuenta"]
	return (
		<Fragment>
			<Head contenido={titulosHead} />
			<div className="row text-center">
				<div className="columns">
					<form className="log-in-form">
						<h4 className="text-center">Ingresa tu Correo de DeNegocios.cl. La clave te será enviada via email.</h4>
						<label>
							Email
							<input type="email" placeholder="correo@denegocios.cl" />
						</label>
						<p>
							<input type="submit" className="button expanded" Value="Enviar Clave" disabled/>
						</p>
					</form>
				</div>
			</div>
		</Fragment>
	)
};