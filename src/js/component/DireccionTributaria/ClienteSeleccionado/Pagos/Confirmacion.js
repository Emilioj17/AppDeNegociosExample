import React, { useState, useContext } from 'react';
import { Context } from "../../../../store/AppContext";

//Este Formulario es de Direccion Tributaria (Modificar Cliente Existente)

const Confirmacion = ({pagoSeleccionado, setPagoSeleccionado}) => {
    const { store, actions } = useContext(Context);

    const HandlerCerrar = (event) => {
        setPagoSeleccionado({
            year: null,
            id: null,
            mes: null,
            montoPagado: null
        })
    }

    return (
        <div className='DivTerciario text-center'>
            <h4>¿Estás Seguro que deseas borrar este Pago?</h4>
            <p>Vas a borrar un pago del mes de {pagoSeleccionado.mes} {pagoSeleccionado.year}, por un monto pagado de {pagoSeleccionado.montoPagado}.</p>

            <div className='button-group align-center'>
                    <button className="submit button">Aceptar</button>
                    <button className="submit button" onClick={(e)=>HandlerCerrar(e)}>Cancelar</button>
            </div>
        </div>
    )

}

export default Confirmacion;