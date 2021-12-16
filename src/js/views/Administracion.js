import React, { Fragment, useContext, useEffect, useState } from "react";
import Head from "../component/Head";
import { Context } from "../../js/store/AppContext";
import '../../styles/App.css';

export const Administracion = () => {
	const [usuarios, setUsuarios] = useState([""]);
	const usuariosActivosx = [];
	const usuariosInactivosx = [];
	const [usuariosActivos, setUsuariosActivos] = useState([""]);
    const [usuariosInactivos, setUsuariosInactivos] = useState([""]);
	const { store, actions } = useContext(Context);
	const titulosHead = ["Bienvenido a Administracion DeNegocios.cl", "Aquí puedes Crear un Usuario"];

	useEffect(() => {
		(async () => {
			actions.getUsuarios();
			setUsuarios(store.usuarios);
		})()
	}, []);

	useEffect(() => {
		setUsuarios(store.usuarios);
		for (let x = 0; usuarios.length > x; x++) {
			if (usuarios[x]["estado"] === "Activo") {
				usuariosActivosx.push([usuarios[x]["nombre"]])
			}
		}
	})

	const Hanlder = () => {
		console.log(usuariosActivosx)
	}

	const DivUsuarios = () => {
        //Este DIV genera las tablas de Usuarios Activos/Inactivos en función de las listas de Usuarios de más arriba.
        const Activos = usuariosActivos.map((usuario, index) => {
            return (
                <div className="form-check" key={index}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id={usuario[2]}/>
                    <label className="form-check-label" htmlFor={usuario[2]}>
                        {usuario[0]} {usuario[1]}
                    </label>
                </div>
            )
        });

        const Inactivos = usuariosInactivos.map((usuario, index) => {
            return (
                <div className="form-check" key={index}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id={usuario[2]}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        {usuario}
                    </label>
                </div>
            )
		});
		
		return (
            <div className="row">
                <div className="col-6 col-md-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Usuarios Inactivos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {Inactivos}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div  className="col-6 col-md-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Usuarios Activos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {Activos}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

	return (
		<Fragment>
			<Head contenido={titulosHead} />
			<div className="row text-center">
				<div className="columns">
					<form className="log-in-form">
                        <h4 className="text-center">Ingresa los Datos solicitados para crear un Usuario</h4>
                        <label>
							Nombre
							<input type="text" placeholder="Solo primer Nombre" />
                        </label>
                        <label>
							Apellido
							<input type="text" placeholder="Solo primer Apellido" />
						</label>
						<label>
							Email
							<input type="email" placeholder="correo@denegocios.cl" />
						</label>
						<label>
							Clave
							<input type="password" placeholder="Clave" />
                        </label>
                        <div className="">
                            <label className="">Elige Tipo</label>
                            <select className="" id="exampleFormControlSelect1" name="tipo">
                            <option selected>Elige una opción...</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Vendedor">Vendedor</option>
                            <option value="Cobranza">Cobranza</option>
                            </select>
                        </div>
                        <div className="">
                            <label className="">Elige Estado</label>
                            <select className="" id="exampleFormControlSelect1" name="estado">
                            <option selected>Elige una opción...</option>
                            <option value="Activo">Activo</option>
                            <option value="Inactivo">Inactivo</option>
                            </select>
                        </div>
						<p>
							<input type="btn" className="button expanded" Value="Crear Usuario" onClick={Hanlder}/>
						</p>
					</form>
				</div>
			</div>
			<DivUsuarios />
		</Fragment>
	)
};