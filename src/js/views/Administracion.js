import React, { Fragment, useContext, useEffect, useState } from "react";
import Head from "../component/Head";
import { Context } from "../../js/store/AppContext";
import '../../styles/App.css';
import Formulario from "../component/Administracion/Formulario";
import Usuarios from "../component/Administracion/Usuarios";

const Administracion = () => {
	const [usuarios, setUsuarios] = useState([""]);
	const [ crear, setCrear ] = useState(false);
	let listaUsuariosX = [];
	const [listaUsuarios, setListaUsuarios] = useState([""]);
	const { store, actions } = useContext(Context);
	const [usuarioActivo, setUsuarioActivo] = useState(null);
	const [accion, setAccion] = useState(null);
	const titulosHead = ["Bienvenido a Administracion DeNegocios.cl", "Aquí puedes Crear, Borrar o Editar un Usuario."];
	

	useEffect(() => {
		(async () => {
			actions.getUsuarios();
			setUsuarios(store.usuarios);
		})()
	}, []);

	useEffect(() => {
		for (let x = 0; usuarios.length > x; x++) {
			listaUsuariosX.push([usuarios[x].nombre, usuarios[x].apellido, usuarios[x].id, usuarios[x].tipo, usuarios[x].correo])
		}
		setListaUsuarios(listaUsuariosX)
		
	}, [usuarios])

	return (
		<Fragment>
			<Head contenido={titulosHead} />
			{(crear) ? null : (<Usuarios listaUsuarios={listaUsuarios} setCrear={setCrear} usuarioActivo={usuarioActivo} setUsuarioActivo={setUsuarioActivo} setAccion={setAccion}/>)}
			{(crear) ? (<Formulario setCrear={setCrear} accion={accion} usuarioActivo={usuarioActivo} usuarios={usuarios}/>) : null}
			<h2>El usuario Activo es {usuarioActivo}</h2>
		</Fragment>
	)
};

export default Administracion;