import React, { useContext } from 'react';
import { Context } from '../../store/AppContext';

const Paginador = () => {
    const { store, actions } = useContext(Context);    
    let rango = [...Array(store.paginasClientesDt).keys()]
    let actual = store.paginaActualClientesDt


    const Lista = (objeto, i, actual) => {
        return (
            <a key={i} className={(objeto+1) == actual ? "sell disabled" : ""} onClick={()=>HandlerClick(objeto)}>{objeto+1}</a>
        )
    }

    const HandlerClick = (objeto) => {
        actions.getClientesDt(objeto+1);
    }

    return (
        <div className="pagination">
            <a>&laquo;</a>
            {rango.map((objeto, i) => Lista(objeto, i, actual))}
            <a>&raquo;</a>
        </div>
    );
}

export default Paginador;