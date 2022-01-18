import React, { useState, useContext } from 'react';
import { Context } from "../../../store/AppContext";
import FiltroPagos from './Pagos/FiltrosPagos';
import ListaPagos from './Pagos/ListaPagos';
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";

const Pagos = ({ clienteDtCliqueado, setClickPagos }) => {
    const { store, actions } = useContext(Context);
    const [ocultarPagos, setOcultarPagos] = useState(false);
    const [filtro, setFiltro] = useState(false);
    const [filtroYear, setFiltroYear] = useState("todos");
    const [filtroMesInicio, setFiltroMesInicio] = useState("Enero");
    const [filtroMesTermino, setFiltroMesTermino] = useState("Diciembre");
    const [filtroSaldo, setFiltroSaldo] = useState("todos");
    
    const HandlerEditarPagos = (event) => {
        setClickPagos(true);
    }

    const HandlerBotonFiltrar = (event) => {
        filtro ? setFiltro(false) : setFiltro(true)
        setFiltroYear("todos");
        setFiltroMesInicio("Enero");
        setFiltroMesTermino("Diciembre");
        setFiltroSaldo("todos");
    }

    const HandlerOcultarPagos = (event) => {
        ocultarPagos ? setOcultarPagos(false) : setOcultarPagos(true);
    }

    return (
        <div className="card">
            <div className="card-divider">
                <h4 className='no-print'>Pagos</h4>
                {ocultarPagos ? (
                    <a class="clear button no-print" onClick={(e)=>HandlerOcultarPagos(e)}><AiFillCaretLeft />Mostrar</a>
                ) : (
                    <a class="clear button no-print" onClick={(e)=>HandlerOcultarPagos(e)}><AiFillCaretDown />Ocultar</a>   
                )}
                <h4 className='print-yes'>Pagos Servicio Direccion Tributaria</h4>
            </div>
            <div className="card-section">
                <div className='no-print text-right'>
                    {!ocultarPagos?(<a class="clear button secondary" onClick={(e) => HandlerBotonFiltrar(e)}>Filtrar</a>):null}
                </div>
                {filtro ? (<FiltroPagos
                    setFiltroYear={setFiltroYear}
                    setFiltroMesInicio={setFiltroMesInicio}
                    setFiltroMesTermino={setFiltroMesTermino}
                    setFiltroSaldo={setFiltroSaldo} />) : null}
                {ocultarPagos ? null : (
                    <ListaPagos
                        filtroYear={filtroYear}
                        filtroMesInicio={filtroMesInicio}
                        filtroMesTermino={filtroMesTermino}
                        filtroSaldo={filtroSaldo} />
                )}
            </div>
            <div className='button-group align-right no-print'>
                <button className="submit button warning" onClick={(e)=>HandlerEditarPagos(e)}>Editar Pagos</button>
            </div>
        </div>
    );
}

export default Pagos;