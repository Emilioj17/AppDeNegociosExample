import React, { useContext } from 'react';
import { Context } from '../../store/AppContext';

const Paginador = () => {
    const { store, actions } = useContext(Context);    
    let rango = [...Array(store.paginasClientesDt).keys()]
    let actual = store.paginaActualClientesDt


    const Lista = (objeto, i, actual) => {
        return (
            <li><a key={i} className={(objeto+1) == actual ? "sell disabled" : ""} onClick={()=>HandlerClick(objeto)}>{objeto+1}</a></li>
        )
    }

    const HandlerClick = (objeto) => {
        actions.getClientesDt(objeto+1);
    }

    return (
        <nav aria-label="Pagination">
            <ul className="pagination">
            <li className="pagination-previous"><a></a></li>
            {rango.map((objeto, i) => Lista(objeto, i, actual))}
            <li className="pagination-next"><a></a></li>
            </ul>
        </nav>
    );
}

export default Paginador;