import React, { Fragment, useContext, useEffect, useState } from "react";
import Head from "../component/Head";
import { Context } from "../../js/store/AppContext";
import { useHistory } from "react-router-dom";
import '../../styles/Administracion.css';
import CreacionUsuario from "../component/Administracion/CreacionUsuario";
import ListaUsuarios from "../component/Administracion/ListaUsuarios";
import ModificarUsuario from "../component/Administracion/ModificarUsuario";

const Administracion = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [crear, setCrear] = useState(false);
	const [modificar, setModificar] = useState(false);
	const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(false);  //Boton Modificar Permite Cliquear al ser true
    const [usuarioCliqueado, setUsuarioCliqueado] = useState(null);
	const titulosHead = ["Bienvenido a Administracion DeNegocios.cl", "Aquí puedes Crear, Borrar o Editar un Usuario."];

	useEffect(() => {
		actions.getUsuarios();
	}, []);

	useEffect(() => {
		setTimeout(() => {
			if (store.usuarioActual == null && store.token == null) {
				history.push("/");
			}
		}, 200);
	});

    const HandlerCrear = (event) => {
		setCrear(true);
    };

	const HandlerModificar = (event) => {
		usuarioSeleccionado ? setUsuarioSeleccionado(false): setUsuarioSeleccionado(true)
    };

	return (
		<Fragment>
			<Head contenido={titulosHead} />
			<div className="row">
				<div className="column">
					{(!crear && !modificar) ? (
					<div className=''>
						<div className="button-group align-right">
							<a className="button warning" name="Modificar" disabled={crear ? true : false} onClick={(e) => HandlerModificar(e)}>Modificar</a>
							<a className="button primary" name="Crear" disabled={usuarioSeleccionado ? true : false} onClick={(e) => HandlerCrear(e)}>Crear Usuario</a>
						</div>
					</div>) : (null)}
				{(!crear && !modificar) ? (<ListaUsuarios setModificar={setModificar} usuarioSeleccionado={usuarioSeleccionado} setUsuarioCliqueado={setUsuarioCliqueado}/>):null}
				{(crear) ? (<CreacionUsuario setCrear={setCrear} />) : null}
				{(modificar) ? (<ModificarUsuario setModificar={setModificar} usuarioCliqueado={usuarioCliqueado} setUsuarioCliqueado={setUsuarioCliqueado}/>) : null}
				</div>
			</div>
		</Fragment>
	)
};

export default Administracion;