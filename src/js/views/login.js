import React from "react";
import "../../styles/Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
	return (
		<div className="container-fluid">
			<div className="row todo">
				<div className="sideNav col-8 text-white bg-dark d-flex justify-content-center align-items-center">
					<div>
						<h2>
							DeNegocios.cl
							<br /> Haz Inicio de Sesión
						</h2>
						<p>Haz login o Registrate.</p>
					</div>
				</div>
				<div className="princialMain col-4 d-flex justify-content-center align-items-center">
					<form>
						<div className="form-group m-2">
							<label>Usuario</label>
							<input type="text" className="form-control" placeholder="Usuario" />
						</div>
						<div className="form-group m-2">
							<label>Clave</label>
							<input type="password" className="form-control" placeholder="Clave" />
						</div>
						<div className="m-4">
							<Link to="/Bienvenida"><button type="button" className="btn btn-black m-2">Login</button></Link>
							<button type="button" className="btn btn-secondary m-2">Register</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
};