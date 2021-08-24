import React, { Fragment } from 'react';
import Head from "../component/Head";

const DireccionTributaria = () => {
    const titulosHead = ["Bienvenido al Servicio de Direccion Tributaria", "Consulta información respecto a Clientes con este servicio contratado."]

    return (
        <Fragment>
            <Head contenido={titulosHead}/>
            Hola desde Direccion Tributaria
        </Fragment>
    );
}

export default DireccionTributaria;