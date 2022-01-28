import React, { useState, useContext } from "react";
import { Context } from "./js/store/AppContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./js/store/AppContext";
import { Login } from "./js/views/Login";
import Administracion from "./js/views/Administracion";
import GeneradorDocumentos from "./js/views/GeneradorDocumentos";
import DireccionTributaria from "./js/views/DireccionTributaria";
import Contabilidad from "./js/views/Contabilidad";
import PaginaNoEncontrada from "./js/views/PaginaNoEncontrada";
import Navbar from "./js/component/Navbar";
import 'foundation-sites/dist/css/foundation.min.css';
import './styles/App.css';

const Layout = () => {
	const { store, actions } = useContext(Context);
	const basename = process.env.BASENAME || "";

	return (
		<div className={store.witch ? ("off-canvas-wrapper"): ("")}>
			<div className={store.witch ? ("off-canvas-wrapper"):("Principal")} data-off-canvas-wrapper>
				<BrowserRouter basename={basename}>
					<Navbar/>
					<div className={store.witch ? ("off-canvas-content"): ("SwitchSecundario")} data-off-canvas-content>
						<Switch className="Switch">
							<Route exact path="/">
								<Login />
							</Route>
							<Route exact path="/GeneradorDocumentos">
								<GeneradorDocumentos />
							</Route>
							<Route exact path="/DireccionTributaria">
								<DireccionTributaria />
							</Route>
							<Route exact path="/Contabilidad">
								<Contabilidad />
							</Route>
							<Route exact path="/Administracion">
								<Administracion />
							</Route>
							{/* 404 */}
							<Route exact path="*">
								<PaginaNoEncontrada/>
							</Route>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		</div>
	);
};

export default injectContext(Layout);
