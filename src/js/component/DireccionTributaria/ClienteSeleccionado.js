import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../../store/AppContext";
import InformacionCliente from "./ClienteSeleccionado/InformacionCliente";
import Notas from "./ClienteSeleccionado/Notas";
import Pagos from "./ClienteSeleccionado/Pagos";
import ModificarClienteDt from "./ClienteSeleccionado/ModificarCliente/ModificarCliente";

const ClienteSeleccionado = ({ setClienteSeleccionado, clienteDtCliqueado }) => {
    const { store, actions } = useContext(Context);
    const [detectorCambios, setDSetectorCambios] = useState(false);
    const [modificarCliente, setModificarCliente] = useState(false);

    useEffect(() => {
        actions.getNota(clienteDtCliqueado.id);
        actions.getClienteDt(clienteDtCliqueado.id);
    }, []);

    useEffect(() => {
        actions.getNota(clienteDtCliqueado.id);
        actions.getClienteDt(clienteDtCliqueado.id);
        actions.getClientesDt();
        setDSetectorCambios(false);
    }, [detectorCambios]);


    const HandlerCerrar = (event) => {
        setClienteSeleccionado(false)
    }

    const HandlerModificarCliente = (event) => {
        setModificarCliente(true);
    }

    return (
        <div className='row'>
            {(modificarCliente) ? (<ModificarClienteDt setModificarCliente={setModificarCliente} clienteDtCliqueado={clienteDtCliqueado} setDSetectorCambios={setDSetectorCambios}/>) : (
                <div className="callout" data-closable>
                    <button className="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
                        <span aria-hidden="true">×</span>
                    </button>
                    <br />
                    <div className='button-group align-right'>
                        <button className="submit success button" onClick={(e)=>HandlerModificarCliente(e)}>Modificar Cliente</button>
                        <button className="submit warning button disabled">Sacar Informe</button>
                    </div>
                    <h3>{clienteDtCliqueado.razon}</h3>
                    <div className="grid-x">
                        <div className="cell small-6">
                            <InformacionCliente clienteDtCliqueado={clienteDtCliqueado} />
                        </div>
                        <div className="cell small-6">
                            <Notas clienteDtCliqueado={clienteDtCliqueado} setDSetectorCambios={setDSetectorCambios}/>
                        </div>
                        <div className="cell">
                            <Pagos clienteDtCliqueado={clienteDtCliqueado} />
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default ClienteSeleccionado;