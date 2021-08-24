import React, { Fragment } from 'react';
import Head from "../component/Head";

const Contabilidad = () => {
    const titulosHead = ["Bienvenido al Servicio de Contabilidad", "Consulta información respecto a Clientes con este servicio contratado."]

    return (
        <Fragment>
            <Head contenido={titulosHead}/>
            Hola desde Contabilidad
        </Fragment>
    );
}

export default Contabilidad;