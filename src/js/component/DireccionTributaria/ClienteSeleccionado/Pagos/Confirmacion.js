import React, { useState, useContext } from 'react';
import { Context } from "../../../../store/AppContext";

//Este Formulario es de Direccion Tributaria (Modificar Cliente Existente)

const Confirmacion = ({pagoSeleccionado, setPagoSeleccionado, tipo, setCrearPagos}) => {
    const { store, actions } = useContext(Context);

    const HandlerCerrar = (event) => {
        setPagoSeleccionado({
            year: null,
            id: null,
            mes: null,
            montoPagado: null
        });
        setCrearPagos(false);
    }

    const HandlerBorrarPago = (event) => {
        
    }

    const HandlerEditarPago = (event) => {
        
    }

    const HandlerCrearPago = (event) => {
        
    }

    return (
        <div className='DivTerciario text-center' style={{ background: (tipo === "borrar" || tipo === "editar")? "red":"green"}}>
            <br />
            <br />
            <br />
            {tipo === "borrar" ? (<h4>¿Estás Seguro que deseas borrar este Pago?</h4>) : null}
            {tipo === "editar" ? (<h4>¿Estás Seguro que deseas editar este Pago?</h4>) : null}
            {tipo === "crear" ? (<h4>Vas a Crear un Pago</h4>):null}
            
            <p>Vas a {(tipo === "borrar") ? "borrar": "editar"} un pago del mes de {pagoSeleccionado.mes} {pagoSeleccionado.year}, por un monto pagado de {pagoSeleccionado.montoPagado}.</p>
            <br />
            <div className='button-group align-center'>
                {tipo==="borrar"? (<button className="submit button alert">Borrar Pago para Siempre</button>): (<button className="submit button warning">Editar Pago</button>)}
                <button className="submit button" onClick={(e)=>HandlerCerrar(e)}>Cancelar</button>
            </div>
        </div>
    )

}

export default Confirmacion;