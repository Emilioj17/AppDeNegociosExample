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
        actions.getUsuario(1)
/*         setAccion("crear");
        setCrear(true); */
    };

    const HandlerModificar = (event) => {
        console.log(store.usuario);
/*         setAccion("modificar");
        setCrear(true); */
    };

	return (
		<Fragment>
			<Head contenido={titulosHead} />
			<div className='row'>
				<div className="button-group align-right">
					<a className="button warning" name="Modificar" onClick={(e) => HandlerModificar(e)}>Modificar</a>
					<a className="button primary" name="Crear" onClick={(e)=>HandlerCrear(e)}>Crear Usuario</a>
				</div>
			</div>
			{(!crear && !modificar) ? (<ListaUsuarios/>):null}
			{(crear) ? (<CreacionUsuario setCrear={setCrear} />) : null}
			{(modificar) ? (<ModificarUsuario setModificar={setModificar} />) : null}
		</Fragment>
	)
};

export default Administracion;