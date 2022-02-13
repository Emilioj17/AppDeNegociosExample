import React, { useContext } from 'react';
import { Context } from '../../store/AppContext';

const Paginador = () => {
    const { store, actions } = useContext(Context);    
    let rango = [...Array(store.paginasClientesDt).keys()]
    let actual = store.paginaActualClientesDt


    const Lista = (objeto, i, actual) => {
        /*  << 1 2 3 ... actual-1 actual actual+1 ... at-3 at-2 at-1 >>
        1)Se recibe array. 
            - Si array es Corto, menos de 3: << 1 2 3 >>
            - Array Largo: << 1 2 3 ... actual-1 actual actual+1 ... at-3 at-2 at-1 >>  (al menos 11)
            -Si array es menos de 9: << 1 2 3 4 5 6 7 8 9 >>
        
        2)Si estás en actual (la idea es que "..." represente al menos 1 número entre):
            -Actual al medio: << 1 2 3 ... actual-1 actual actual+1 ... at-3 at-2 at-1 >> (actual, al menos 6)
            -Actual al comienzo: << 1 2 3 actual-1 actual actual+1 ... at-3 at-2 at-1 >>   (actual menos de 6)
            -Actual al final: << 1 2 3 ... actual-1 actual actual+1 at-3 at-2 at-1 >>   (actual, al menos 19... si es menos de 19)
        */
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