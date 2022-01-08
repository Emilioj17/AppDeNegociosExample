import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../../store/AppContext";
import InformacionCliente from "./ClienteSeleccionado/InformacionCliente";
import Notas from "./ClienteSeleccionado/Notas";
import Pagos from "./ClienteSeleccionado/Pagos";


const ClienteSeleccionado = ({ setClienteSeleccionado, clienteDtCliqueado }) => {
    const { store, actions } = useContext(Context);
    const [detectorCambios, setDSetectorCambios] = useState(false);

    useEffect(() => {
        actions.getNota(clienteDtCliqueado.id);
    }, []);

    useEffect(() => {
        actions.getNota(clienteDtCliqueado.id);
        setDSetectorCambios(false);
    }, [detectorCambios]);


    const HandlerCerrar = (event) => {
        setClienteSeleccionado(false)
    }

    return (
        <div className='row'>
            <div className="callout" data-closable>
                <button className="close-button" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
                    <span aria-hidden="true">×</span>
                </button>
                <br />
                <div className='button-group align-right'>
                    <button className="submit success button">Modificar Cliente</button>
                    <button className="submit warning button disabled">Sacar Informe</button>
                </div>
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
        </div>
    );
}

export default ClienteSeleccionado;