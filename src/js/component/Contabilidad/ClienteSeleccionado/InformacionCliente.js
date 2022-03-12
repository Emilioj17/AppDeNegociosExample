import React, { useContext } from "react";
import { Context } from "../../../store/AppContext";

const InformacionCliente = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className='cell small-6'>
			<div className='card' style={{ width: "99%" }}>
				<div className='card-divider no-print'>
					<h4>Informacion de Cliente</h4>
				</div>
				<div className='card-section'>
					{store.infoClienteContabilidad != null ? (
						<ul className='no-bullet'>
							<li>Id:{store.infoClienteContabilidad.id}</li>
							<li>Razon Social: {store.infoClienteContabilidad.razon}</li>
							<li>Rut Empresa: {store.infoClienteContabilidad.rut}</li>
							<li className='no-print'>
								Vigente: {store.infoClienteContabilidad.vigente}
							</li>
							<li className='no-print'>
								Erpyme: {store.infoClienteContabilidad.erpyme}
							</li>
							<li>
								Correo: {store.infoClienteContabilidad.correo},{" "}
								{store.infoClienteContabilidad.correoSecundario},{" "}
								{store.infoClienteContabilidad.correoTerciario}
							</li>
							<li>Fono: {store.infoClienteContabilidad.fono}</li>
							<li>Whatsapp: {store.infoClienteContabilidad.whatsapp}</li>
							<li>Repetido: {store.infoClienteContabilidad.repetido}</li>
							<li>Dicom: {store.infoClienteContabilidad.dicom}</li>
							<li>Meses Pendientes: $</li>
						</ul>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default InformacionCliente;
