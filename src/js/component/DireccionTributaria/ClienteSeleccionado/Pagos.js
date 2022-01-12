import React, { useState, useContext } from 'react';
import { Context } from "../../../store/AppContext";
import FiltroPagos from './Pagos/FiltrosPagos';
import ListaPagos from './Pagos/ListaPagos';

const Pagos = ({ clienteDtCliqueado, setClickPagos }) => {
    const { store, actions } = useContext(Context);
    const [filtro, setFiltro] = useState(false);
    const [filtroYear, setFiltroYear] = useState("todos");
    const [filtroMesInicio, setFiltroMesInicio] = useState("Enero");
    const [filtroMesTermino, setFiltroMesTermino] = useState("Diciembre");
    const [filtroSaldo, setFiltroSaldo] = useState("todos");
    
    const HandlerEditarPagos = (event) => {
        setClickPagos(true);
    }

    const BotonFiltrar = (event) => {
        filtro ? setFiltro(false) : setFiltro(true)
        setFiltroYear("todos");
        setFiltroMesInicio("Enero");
        setFiltroMesTermino("Diciembre");
        setFiltroSaldo("todos");
    }

    return (
        <div className="card">
            <div className="card-divider">
                <h4 className='no-print'>Pagos</h4>
                <h4 className='print-yes'>Pagos Servicio Direccion Tributaria</h4>
            </div>
            <div className="card-section">
                <div className='no-print text-right'>
                    <a class="clear button secondary" onClick={(e)=>BotonFiltrar(e)}>Filtrar</a>
                </div>
                {filtro ? (<FiltroPagos
                    setFiltroYear={setFiltroYear}
                    setFiltroMesInicio={setFiltroMesInicio}
                    setFiltroMesTermino={setFiltroMesTermino}
                    setFiltroSaldo={setFiltroSaldo} />) : null}
                <ListaPagos
                    filtroYear={filtroYear}
                    filtroMesInicio={filtroMesInicio}
                    filtroMesTermino={filtroMesTermino}
                    filtroSaldo={filtroSaldo} />
            </div>
            <div className='button-group align-right no-print'>
                <button className="submit button" onClick={(e)=>HandlerEditarPagos(e)}>Editar Pagos</button>
                <button className="submit button">Agregar Pago</button>
            </div>
        </div>
    );
}

export default Pagos;