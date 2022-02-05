import React, { useState, useContext } from 'react';
import { Context } from "../../../../store/AppContext";
import { AiOutlineWarning } from "react-icons/ai";


//Este Formulario es de Direccion Tributaria (Modificar Cliente Existente)

const BorrarPago = ({pagoSeleccionado, setPagoSeleccionado, setDSetectorCambios, setDisabled}) => {
    const { store, actions } = useContext(Context);

    const HandlerCerrar = (event) => {
        setDisabled(false);
        setPagoSeleccionado({
            object: null,
            year: null
        });
    }

    const HandlerBorrarPago = (event) => {
        actions.borrarPago(pagoSeleccionado.year, pagoSeleccionado.object.id);
        setTimeout(() => { setPagoSeleccionado({
            object: null,
            year: null
        });
        }, 200);
        setDSetectorCambios(true);
        setDisabled(false);

    }

    return (
        <div className='DivTerciario text-center' style={{background:"red"}}>
            <div>
                <h4>¿Estás Seguro que deseas borrar este Pago?</h4>
                <p>Vas a borrar un pago del mes de <strong>{pagoSeleccionado.object.mes} {pagoSeleccionado.year}</strong>, por un monto pagado de <strong>${pagoSeleccionado.object.montoPagado}</strong>.</p>
            </div>
            <br />
            <div className='button-group align-center'>
                <button className="submit button alert" onClick={(e)=>HandlerBorrarPago(e)}>Borrar Pago para Siempre</button>
                <button className="submit button" onClick={(e)=>HandlerCerrar(e)}>Cancelar</button>
            </div>
            <div><h3><AiOutlineWarning/> Vas a borrar un pago, este cambio es irrecuperable.</h3></div>
        </div>
    )

}

export default BorrarPago;