import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../../store/AppContext";
import InformacionCliente from "./ClienteSeleccionado/InformacionCliente";
import Notas from "./ClienteSeleccionado/Notas";
import Pagos from "./ClienteSeleccionado/Pagos";
import ModificarClienteDt from "./ClienteSeleccionado/ModificarCliente/ModificarCliente";
import DetallePagos from "./ClienteSeleccionado/Pagos/DetallePagos"

const ClienteSeleccionado = ({ setClienteSeleccionado, clienteDtCliqueado }) => {
    const { store, actions } = useContext(Context);
    const [detectorCambios, setDSetectorCambios] = useState(false);
    const [modificarCliente, setModificarCliente] = useState(false);
    const [clickPagos, setClickPagos] = useState(false);

    useEffect(() => {
        actions.getNota(clienteDtCliqueado.id);
        actions.getClienteDt(clienteDtCliqueado.id);
        actions.getPago2019(clienteDtCliqueado.id);
        actions.getPago2020(clienteDtCliqueado.id);
        actions.getPago2021(clienteDtCliqueado.id);
        actions.getPago2022(clienteDtCliqueado.id);
    }, []);

    useEffect(() => {
        actions.getNota(clienteDtCliqueado.id);
        actions.getClienteDt(clienteDtCliqueado.id);
        actions.getPago2019(clienteDtCliqueado.id);
        actions.getPago2020(clienteDtCliqueado.id);
        actions.getPago2021(clienteDtCliqueado.id);
        actions.getPago2022(clienteDtCliqueado.id);
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
        <div className='row yes-print'>
            {(modificarCliente) ? (<ModificarClienteDt setModificarCliente={setModificarCliente} clienteDtCliqueado={clienteDtCliqueado} setDSetectorCambios={setDSetectorCambios} />) : null}
            {(modificarCliente || clickPagos) ? null : (
                            <div className="callout" data-closable>
                                <button className="close-button no-print" aria-label="Dismiss alert" type="button" data-close onClick={(e)=>HandlerCerrar(e)}>
                                    <span aria-hidden="true">×</span>
                                </button>
                                <br className='no-print'/>
                                <div className='grid-x no-print'>
                                    <div className='cell small-6'>{(store.infoClienteDt != null) ? (<h3>{store.infoClienteDt.razon}</h3>):null}</div>
                                    <div className='cell small-6 button-group align-right'>
                                        <button className="submit success button" onClick={(e)=>HandlerModificarCliente(e)}>Modificar Cliente</button>
                                        <button className="submit warning button" onClick={(e)=> window.print()}>Sacar Informe</button>
                                    </div>
                                </div>
                                <div className="grid-x">
                                    <div className='cell small-12 print-yes'>{(store.infoClienteDt != null) ? (<h3>{store.infoClienteDt.razon}</h3>):null}</div>
                                    <div className="cell small-6 no-print">
                                        <InformacionCliente clienteDtCliqueado={clienteDtCliqueado} />
                                    </div>
                                    <div className="cell small-8 print-yes">
                                        <InformacionCliente clienteDtCliqueado={clienteDtCliqueado} />
                                    </div>
                                    <div className="cell small-4 print-yes">
                                        <p>Por favor, realizar sus transferencias y pagos a:</p>
                                        <ul>
                                            <li>BANCO ESTADO</li>
                                            <li>Empresa: DeNegocios.cl SpA</li>
                                            <li>Rut: 76717904-9</li>
                                            <li>Chequera Electronica/Cuenta Vista</li>
                                            <li>N° Cuenta: 28670133798</li>
                                            <li>Correo: pagos@denegocios.cl</li>
                                        </ul>
                                        <p>Es importante notificar sus transferencias al correo de pagos@denegocios.cl. Le recomendamos
                                            enviar un correo electrónico a parte, indicando los datos básicos de su empresa para poder identificarle
                                            correctamente.
                                        </p>
                                    </div>
                                    <div className="cell small-6 no-print">
                                        <Notas clienteDtCliqueado={clienteDtCliqueado} setDSetectorCambios={setDSetectorCambios}/>
                                    </div>
                                    <div className="cell">
                                        <Pagos clienteDtCliqueado={clienteDtCliqueado} setClickPagos={setClickPagos}/>
                                    </div>
                                </div>
                            </div>
            )}
            {clickPagos ? (<DetallePagos setClickPagos={setClickPagos} />):null}
        </div>
    );
}

export default ClienteSeleccionado;