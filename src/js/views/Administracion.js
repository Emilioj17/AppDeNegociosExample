import React, { Fragment, useContext, useEffect, useState } from "react";
import Head from "../component/Head";
import { Context } from "../../js/store/AppContext";
import '../../styles/App.css';
import Formulario from "../component/Administracion/Formulario";
import Usuarios from "../component/Administracion/Usuarios";

export const Administracion = () => {
	const [usuarios, setUsuarios] = useState([""]);
	const { crear, setCrear } = useState("XX");
	let usuariosActivosx = [];
	const [usuariosActivos, setUsuariosActivos] = useState([""]);
	const { store, actions } = useContext(Context);
	const titulosHead = ["Bienvenido a Administracion DeNegocios.cl", "Aquí puedes Crear, Borrar o Editar un Usuario."];
	

	useEffect(() => {
		(async () => {
			actions.getUsuarios();
			setUsuarios(store.usuarios);
		})()
	}, []);

	useEffect(() => {
		for (let x = 0; usuarios.length > x; x++) {
			usuariosActivosx.push([usuarios[x].nombre, usuarios[x].apellido, usuarios[x].id, usuarios[x].tipo, usuarios[x].correo])
		}
		setUsuariosActivos(usuariosActivosx)
		
	}, [usuarios])

	return (
		<Fragment>
			<Head contenido={titulosHead} />
			{(crear==="XX") ? null : (<Usuarios
				usuariosActivos={usuariosActivos}
				setCrear={setCrear}
			/>)}
			{(crear==="XX") ? (<Formulario />) : null}
		</Fragment>
	)
};