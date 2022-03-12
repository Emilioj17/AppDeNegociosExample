import React, { useContext } from "react";
import { Context } from "../../../store/AppContext";
import "../../../../styles/TablaClientes.css";

//Aquí se genera el Listado de Clientes que se muestra en Dt. Desde DireconTributaria.js se ejecuta el action que llama la info de la bd. Esta lista se guarda en store.clientesDt.
// Respecto al CSS del Paginator, se debió crear un .css adicional solo para setear los colores.

const ListaClientesContabilidad = () => {
	const { store, actions } = useContext(Context);

	//La siguiente funcion despliega la lista de Clientes con sus respectivas Columnas.
	const ListaDesplegarClientes = (objeto, i) => {
		return (
			<tr key={i}>
				<td>{objeto.id}</td>
				<td>{objeto.razon}</td>
				<td>{objeto.rut}</td>
				<td>
					{objeto.correo}
					{objeto.correoSecundario === "" ? null : (
						<span>, {objeto.correoSecundario}</span>
					)}
					{objeto.correoTerciario === "" ? null : (
						<span>, {objeto.correoTerciario}</span>
					)}
				</td>
				<td>{objeto.fono}</td>
				<td>{objeto.vigente}</td>
			</tr>
		);
	};

	return (
		<div className={store.witch ? "row" : ""}>
			{store.clientesContabilidad.length != 0 ? (
				<table
					className={`table hover ${store.witch ? "tablaClientes" : ""}`}
					id='tblData'
				>
					<thead>
						<tr>
							<th className='id' scope='col'>
								Id
							</th>
							<th scope='col'>Razon Social</th>
							<th className='rut' scope='col'>
								Rut
							</th>
							<th scope='col'>Correo</th>
							<th className='telefono' scope='col'>
								Teléfono
							</th>
							<th scope='col'>Vigente</th>
						</tr>
					</thead>
					<tbody>
						{store.clientesContabilidad != null ? (
							store.clientesContabilidad.map((objeto, i) =>
								ListaDesplegarClientes(objeto, i)
							)
						) : (
							<td colSpan='9'>
								<h3 className='text-center'>
									{" "}
									- Tu Busqueda no Arrojó Resultados -
								</h3>
							</td>
						)}
					</tbody>
				</table>
			) : (
				<div colSpan='9'>
					<br />
					<h3 className='text-center'> - Tu Busqueda no Arrojó Resultados -</h3>
				</div>
			)}
		</div>
	);
};

export default ListaClientesContabilidad;
