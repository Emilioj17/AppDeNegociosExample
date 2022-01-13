import React, { Fragment } from "react";

const Recuperar = ({setRecuperarClave}) => {
	const HandlerCerrar = (event) => {
		setRecuperarClave(false);
	}

	return (
		<Fragment>
			<div className="grid-x grid-margin-x">
				<div className="cell small-4 large-offset-4">
						<br />
						<br />
					<div className="alert callout" data-closable="slide-out-right">
						<br />
						<br />
						<div className="row text-center">
							<h5>Por favor, ponte en contacto con uno de los Usuarios Administradores.</h5>
						</div>
						<button className="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
							<span aria-hidden="true">×</span>
						</button>
						<br />
						<br />
					</div>
				</div>
			</div>
		</Fragment>
	)
};

export default Recuperar;