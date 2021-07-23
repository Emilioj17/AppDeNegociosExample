import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./js/component/ScrollToTop";
import injectContext from "./js/store/AppContext";
import { Navbar } from "./js/component/Navbar";
import { Footer } from "./js/component/Footer";
import { Home } from "./js/views/Home";
import { Login } from "./js/views/Login";
import { Bienvenida } from "./js/views/Bienvenida";
import { GeneradorDocumentos } from "./js/views/GeneradorDocumentos";
import { PoderMunicipal } from "./js/views/PoderMunicipal";
import { PoderSii } from "./js/views/PoderSii";
import "./styles/Layout.css"

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="Main">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar className="Navbar"/>
					<Switch className="Switch">
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/Home">
							<Home />
						</Route>
						<Route exact path="/Login">
							<Login />
						</Route>
						<Route exact path="/Bienvenida">
							<Bienvenida />
						</Route>
						<Route exact path="/GeneradorDocumentos">
							<GeneradorDocumentos />
						</Route>
						<Route exact path="/PoderSii">
							<PoderSii />
						</Route>
						<Route exact path="/PoderMunicipal">
							<PoderMunicipal />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer className="Footer"/>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
