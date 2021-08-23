import React, { Fragment } from "react";
import Head from "../component/Head";
import '../../styles/App.css';

export const Login = () => {
	const titulosHead = ["Bienvenido a Administracion DeNegocios.cl", "Por favor, ingresa a tu sesión."]
	return (
		<Fragment>
			<Head contenido={titulosHead} />
			<div className="row text-center">
				<div className="columns">
					<form className="log-in-form">
						<h4 className="text-center">Ingresa con tu Correo de DeNegocios.cl</h4>
						<label>
							Email
							<input type="email" placeholder="correo@denegocios.cl" />
						</label>
						<label>
							Clave
							<input type="password" placeholder="Clave" />
						</label>
						<p>
							<input type="submit" className="button expanded" Value="Ingresar" disabled/>
						</p>
						<p className="text-center">
							<a href="#">Olvidaste tu clave?</a>
						</p>
					</form>
				</div>
			</div>
		</Fragment>
	)
};