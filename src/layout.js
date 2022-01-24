import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./js/store/AppContext";
import { Login } from "./js/views/Login";
import Administracion from "./js/views/Administracion";
import GeneradorDocumentos from "./js/views/GeneradorDocumentos";
import DireccionTributaria from "./js/views/DireccionTributaria";
import Contabilidad from "./js/views/Contabilidad";
import Navbar from "./js/component/Navbar";
import 'foundation-sites/dist/css/foundation.min.css';
import './styles/App.css';

const Layout = () => {
	const [witch, setWitch] = useState(true);	
	const basename = process.env.BASENAME || "";

	return (
		<div className="">
			<div className="Principal">
				<BrowserRouter basename={basename}>
					<Navbar witch={witch} setWitch={setWitch}/>
					<div className={witch ? ("SwitchPrincipal"): ("SwitchSecundario")}>
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
