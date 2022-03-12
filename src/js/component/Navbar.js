import React, { Fragment, useContext, useState } from "react";
import { Context } from "../store/AppContext";
import { Link, useHistory } from "react-router-dom";
import "../../styles/App.css";
import { GiTRexSkull, GiHamburgerMenu, GiSubmarine } from "react-icons/gi";

const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [paginaActual, setDPaginaActual] = useState("/"); //Marca la página actual en la navbar
	const history = useHistory();

	const HandlerWitch = (event) => {
		actions.setWitch();
	};

	const HandlerCerrarSesion = (event) => {
		// Hace el cierre de sesión.
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("usuarioActual");
		store.token = null;
		store.usuarioActual = null;
		window.location.href = "https://denegocios.cl/";
		return null;
	};

	const HandlerIdentificarPaginaActual = (event) => {
		setDPaginaActual(event.target.pathname);
	};

	const NavbarInicio = () => {
		return (
			<div
				className='off-canvas position-left reveal-for-medium no-print'
				data-off-canvas
				data-position='left'
			>
				<div className='row column'>
					<br className='no-print' />
					<h5 style={{ display: "inline", paddingRight: "30px" }}>
						DeNegocios.cl{" "}
					</h5>
					<br className='no-print' />
					<ul className='vertical menu no-print' style={{ maxWidth: "250px" }}>
						<li className='no-print'>
							<Link to='/'>Inicio</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	};

	const NavbarDesplegado = () => {
		return (
			<div
				className='off-canvas position-left reveal-for-medium no-print'
				data-off-canvas
				data-position='left'
			>
				<div className='row column'>
					<br className='no-print' />
					<h5 style={{ display: "inline", paddingRight: "30px" }}>
						DeNegocios.cl{" "}
					</h5>
					<span className='Submarino' onClick={(e) => HandlerWitch(e)}>
						<GiSubmarine />
					</span>
					<br className='no-print' />
					<ul className='vertical menu no-print' style={{ maxWidth: "250px" }}>
						<li
							className={paginaActual === "/" ? "PaginaActual" : null}
							onClick={(e) => HandlerIdentificarPaginaActual(e)}
						>
							<Link to='/'>Inicio</Link>
						</li>
						<li
							className={
								paginaActual === "/GeneradorDocumentos" ? "PaginaActual" : null
							}
							onClick={(e) => HandlerIdentificarPaginaActual(e)}
						>
							<Link to='/GeneradorDocumentos'>Generador de Documentos</Link>
						</li>
						<li
							className={
								paginaActual === "/DireccionTributaria" ? "PaginaActual" : null
							}
							onClick={(e) => HandlerIdentificarPaginaActual(e)}
						>
							<Link to='/DireccionTributaria'>Direccion Tributaria</Link>
						</li>
						<li
							className={
								paginaActual === "/Contabilidad" ? "PaginaActual" : null
							}
							onClick={(e) => HandlerIdentificarPaginaActual(e)}
						>
							<Link to='/Contabilidad'>Contabilidad</Link>
						</li>
						{store.usuarioActual.tipo == "Administrador" ||
						store.usuarioActual.tipo == "Super Administrador" ? (
							<li>
								<a className='isDisabled' to='#'>
									RRHH
								</a>
							</li>
						) : null}
						{store.usuarioActual.tipo == "Administrador" ||
						store.usuarioActual.tipo == "Super Administrador" ? (
							<li
								className={
									paginaActual === "/Administracion" ? "PaginaActual" : null
								}
								onClick={(e) => HandlerIdentificarPaginaActual(e)}
							>
								<Link to='/Administracion'>
									Admin Usuarios <GiTRexSkull />
								</Link>
							</li>
						) : null}
						<li>
							<Link to='#' onClick={(e) => HandlerCerrarSesion(e)}>
								Cerrar Sesion
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	};

	const NavbarCortito = () => {
		return (
			<div className='NavbarCortito no-print'>
				<button onClick={(e) => HandlerWitch(e)} data-close>
					<span aria-hidden='true'>
						<GiHamburgerMenu />
					</span>
				</button>
			</div>
		);
	};

	return (
		<Fragment>
			{store.token == null && store.usuarioActual == null ? (
				<NavbarInicio />
			) : store.witch ? (
				<NavbarDesplegado />
			) : (
				<NavbarCortito />
			)}
		</Fragment>
	);
};

export default Navbar;
