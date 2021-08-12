import React from 'react';

const Opciones = ({ opcion, setOpcion }) => {
    const Handler = (event) => {
        setOpcion(event.target.name)
    };
    
    return (
        <div className="row small-up-2 medium-up-3 large-up-4">
            <div className="column">
            <a className={(opcion=="Poder SII")?"button primary":"button secondary"} name="Poder SII" onClick={(e)=>Handler(e)}>Poder SII</a>
            </div>
            <div className="column">
            <a className={(opcion=="Poder Municipal")?"button primary":"button secondary"} name="Poder Municipal" onClick={(e)=>Handler(e)}>Poder Municipal</a>
            </div>
            <div className="column">
            <a className={(opcion=="Contrato Arriendo Mensual")?"button primary":"button secondary"} name="Contrato Arriendo Mensual" onClick={(e)=>Handler(e)}>Contrato Arriendo Mensual</a>
            </div>
            <div className="column">
            <a className={(opcion=="Contrato Arriendo Anual")?"button primary":"button secondary"} name="Contrato Arriendo Anual" onClick={(e)=>Handler(e)}>Contrato Arriendo Anual</a>
            </div>
            <div className="column">
            <a className={(opcion=="Contrato Arriendo 30 dias")?"button primary":"button secondary"} name="Contrato Arriendo 30 dias" onClick={(e)=>Handler(e)}>Contrato Arriendo 30 dias</a>
            </div>
            <div className="column">
            <a className={(opcion=="Contrato Contabilidad")?"button primary":"button secondary"} name="Contrato Contabilidad" onClick={(e)=>Handler(e)}>Contrato Contabilidad</a>
            </div>
        </div>
    );
}
 
export default Opciones;