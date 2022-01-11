import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./js/store/AppContext";
import { Login } from "./js/views/Login";
import { Recuperar } from "./js/views/Recuperar";
import Administracion from "./js/views/Administracion";
import GeneradorDocumentos from "./js/views/GeneradorDocumentos";
import DireccionTributaria from "./js/views/DireccionTributaria";
import Contabilidad from "./js/views/Contabilidad";
import Navbar from "./js/component/Navbar";
import 'foundation-sites/dist/css/foundation.min.css';

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="off-canvas-wrapper">
			<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
				<BrowserRouter basename={basename}>
					<Navbar/>
					<div className="off-canvas-content" data-off-canvas-content>
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
							<Route exact path="/Recuperar">
								<Recuperar />
							</Route>
							<Route exact path="/Administracion">
								<Administracion />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		</div>
	);
};

export default injectContext(Layout);
