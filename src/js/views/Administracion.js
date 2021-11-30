import React, { Fragment } from "react";
import Head from "../component/Head";
import '../../styles/App.css';

export const Administracion = () => {
	const titulosHead = ["Bienvenido a Administracion DeNegocios.cl", "Aquí puedes Crear un Usuario"]
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
							<input type="submit" className="button expanded" Value="Crear Usuario" disabled/>
						</p>
					</form>
				</div>
			</div>
		</Fragment>
	)
};