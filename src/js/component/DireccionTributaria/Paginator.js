import React, { useContext } from 'react';
import { Context } from '../../store/AppContext';

const Paginador = () => {
    const { store, actions } = useContext(Context);
    /* let rango = [0,1,2,3,4,5,6,7,8,9,10] */
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
        
        if (rango.length <= 10) {
            return (
                <li><a key={i} className={(objeto+1) == actual ? "sell disabled" : ""} onClick={()=>HandlerClick(objeto)}>{objeto+1}</a></li>
            )
        }

        else {
            if (objeto == 0 || objeto == 1 || objeto == 2 || objeto == rango.at(-1) || objeto == rango.at(-2) || objeto == rango.at(-3)) {
                if (objeto + 1 == actual - 2 || objeto + 1 == actual + 2) {
                    return (
                        <li><a key={i}>....</a></li>
                    )
                }
                return (
                    <li><a key={i} className={(objeto+1) == actual ? "sell disabled" : ""} onClick={()=>HandlerClick(objeto)}>{objeto+1}</a></li>
                )
            }
            else {
                if (objeto + 1 == actual - 1 || objeto + 1 == actual || objeto + 1 == actual + 1) {
                    return (
                        <li><a key={i} className={(objeto+1) == actual ? "sell disabled" : ""} onClick={()=>HandlerClick(objeto)}>{objeto+1}</a></li>
                    )
                }
            }
            if (objeto + 1 == actual - 2 || objeto + 1 == actual + 2) {
                return (
                    <li><a key={i}>....</a></li>
                )
            }

        }
    }

    const HandlerClick = (objeto) => {
        actions.getClientesDt(objeto+1);
    }

    const HandlerClickFlechas = (actual, string) => {
        if (string === "Avanzar") {
            if (actual <= rango.at(-1)) {
                actions.getClientesDt(actual+1);
            }
        }
        else if (string === "Retroceder"){
            if (actual != 1) {
                actions.getClientesDt(actual-1);
            }
        }
    }

    return (
        <nav aria-label="Pagination">
            <ul className="pagination">
                <li className="pagination-previous" onClick={(e)=>HandlerClickFlechas(actual, "Retroceder")}><a></a></li>
                {(store.clientesDt != null) ? (rango.map((objeto, i) => Lista(objeto, i, actual))): null}
            <li className="pagination-next" onClick={(e)=>HandlerClickFlechas(actual, "Avanzar")}><a></a></li>
            </ul>
        </nav>
    );
}

export default Paginador;