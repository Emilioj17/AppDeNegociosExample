import React from "react";
import ListaClientesContabilidadUsuarioNormal from "./ListaClientesContabilidadUsuarioNormal";

//Esta genera el listado de empresas, en función de la busqueda realizada.

const ResultadoBusquedaContabilidad = () => {
	return (
		<div className='column'>
			<ListaClientesContabilidadUsuarioNormal />
		</div>
	);
};

export default ResultadoBusquedaContabilidad;
