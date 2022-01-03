import React, { Fragment, useContext, useState, useEffect } from 'react';
import Head from "../component/Head";
import { Context } from "../../js/store/AppContext";

const DireccionTributaria = () => {
    const [clientesDt, setClientesDt] = useState({});
    const { store, actions } = useContext(Context);
    const titulosHead = ["Bienvenido al Servicio de Direccion Tributaria", "Consulta información respecto a Clientes con este servicio contratado."];

    useEffect(() => {
		(async () => {
			actions.getClientesDt();
			setClientesDt(store.clientesDt);
		})()
	}, []);

    return (
        <Fragment>
            <Head contenido={titulosHead}/>
            Hola desde Direccion Tributaria
        </Fragment>
    );
}

export default DireccionTributaria;