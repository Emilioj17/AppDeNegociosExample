import React, { useState, useContext } from 'react';
import { Context } from "../../../../store/AppContext";

//Este Formulario es de Direccion Tributaria (Modificar Cliente Existente)

const Confirmacion = ({setClickPagos}) => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            ¿Estás Seguro que deseas borrar este Pago?
            Cliente:
            Monto:
            Servicio:
        </div>
    )

}

export default Confirmacion;