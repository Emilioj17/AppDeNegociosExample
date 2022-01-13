import React, { Fragment, useState } from "react";
import Head from "../component/Head";
import '../../styles/App.css';
import Recuperar from "../component/Login/Recuperar";

export const Login = () => {
	const titulosHead = ["Bienvenido a Administracion DeNegocios.cl", "Por favor, ingresa a tu sesión."];
	const [recuperarClave, setRecuperarClave] = useState(false);

	const HandlerRecuperarClave = (event) => {
		setRecuperarClave(true);
	}
	
	return (
		<Fragment>
			<Head contenido={titulosHead} />
			{recuperarClave ? (<Recuperar setRecuperarClave={setRecuperarClave}/>) : (
				<div className="row text-center">
					<div className="grid-x grid-margin-x">
						<div className="cell small-4 large-offset-4">
							<form className="log-in-form">
								<h4 className="text-center">Ingresa con tu Correo de DeNegocios.cl</h4>
								<div className="text-left">
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
								</div>
								<p className="text-center">
								<a class="clear button secondary" onClick={(e)=>HandlerRecuperarClave(e)}>Olvidaste tu Clave?</a>
								</p>
							</form>	
						</div>
					</div>
				</div>
			)}
		</Fragment>
	)
};