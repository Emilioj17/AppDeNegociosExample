import React, { useContext, Fragment, useState, useEffect } from "react";
import { Context } from "../../js/store/AppContext";
import Head from "../component/Head";
import '../../styles/App.css';
import Recuperar from "../component/Login/Recuperar";
import Bienvenida from "../component/Login/Bienvenida";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const titulosHead = ["Bienvenido a Administracion DeNegocios.cl", "Por favor, ingresa a tu sesión."];
	const [bienvenida, setBienvenida] = useState(false);
	const [recuperarClave, setRecuperarClave] = useState(false);
	const [correo, setCorreo] = useState(null);
	const [clave, setClave] = useState(null);

	const HandlerRecuperarClave = (event) => {
		setRecuperarClave(true);
	}

	useEffect(() => {
        if (store.usuarioActual != null) {
			setBienvenida(true);
        }
	})
	
	const HandlerLogin = (event) => {
		event.preventDefault();
        actions.getUsuario(correo, clave);
	}
	
	return (
		<Fragment>
			<Head contenido={titulosHead} />
			{bienvenida ? (<Bienvenida/>): null}
			{recuperarClave ? (<Recuperar setRecuperarClave={setRecuperarClave} />) : null}
			{!bienvenida && !recuperarClave ? (
				<div className="row text-center">
					<div className="grid-x grid-margin-x">
						<div className="cell small-4 large-offset-4">
							<br />
							<br />
							<form className="log-in-form">
								<h4 className="text-center">Ingresa con tu Correo de DeNegocios.cl</h4>
								<div className="text-left">
									<label>
										Email
										<input type="email" placeholder="correo@denegocios.cl" onChange={(event) => setCorreo(event.target.value)}/>
									</label>
									<label>
										Clave
										<input type="password" placeholder="Clave" onChange={(event) => setClave(event.target.value)}/>
									</label>
									<a className="button expanded" onClick={(e)=>HandlerLogin(e)}>Ingresar</a>
								</div>
								<p className="text-center">
								<a class="clear button secondary" onClick={(e)=>HandlerRecuperarClave(e)}>Olvidaste tu Clave?</a>
								</p>
							</form>	
						</div>
					</div>
				</div>
			):null}
		</Fragment>
	)
};