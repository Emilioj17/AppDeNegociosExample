import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../../styles/Navbar.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="#">DeNegocios.cl</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText"
				aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/PoderSII">Poder SII</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/PoderMunicipal">Poder Municipal</Link>
						</li>
					</ul>
					<span className="navbar-text"><Link className="nav-link" to="/Login">Ingreso</Link></span>
				</div>
			</div>
		</nav>

	);
};
