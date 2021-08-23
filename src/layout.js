import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./js/store/AppContext";
import { Login } from "./js/views/Login";
import GeneradorDocumentos from "./js/views/GeneradorDocumentos";
import Navbar from "./js/component/Navbar";
import 'foundation-sites/dist/css/foundation.min.css';

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="off-canvas-wrapper">
			<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
				<BrowserRouter basename={basename}>
					<Navbar />
					<div className="off-canvas-content" data-off-canvas-content>
						<Switch className="Switch">
							<Route exact path="/">
								<Login />
							</Route>
							<Route exact path="/GeneradorDocumentos">
								<GeneradorDocumentos />
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
