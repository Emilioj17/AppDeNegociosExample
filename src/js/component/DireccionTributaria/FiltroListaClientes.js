import React, { useState, useContext } from 'react';
import { Context } from "../../store/AppContext";
import { FiAlertOctagon } from "react-icons/fi";

//Este Formulario es de Direccion Tributaria (Crear un Nuevo Cliente)

const FiltroListaClientes = ({setFiltro, setFiltroVigente, setFiltroErpyme, setFiltroSaldo}) => {
    const { store, actions } = useContext(Context);
    const [defectFiltroVigente, setDefectFiltroVigente] = useState("todos");
    const [defectFiltroErpyme, setDefectFiltroErpyme] = useState("todos");
    const [defectFiltroSaldo, setDefectFiltroSaldo] = useState("todos");

    const HandlerFiltroVigente = (event) => {
        setFiltroVigente(event.target.value);
        setDefectFiltroVigente(event.target.value);
    }

    const HandlerFiltroErpyme = (event) => {
        setFiltroErpyme(event.target.value);
        setDefectFiltroErpyme(event.target.value);
    }

    const HandlerFiltroSaldo = (event) => {
        setFiltroSaldo(event.target.value);
        setDefectFiltroSaldo(event.target.value);
    }

    const HandlerResetFiltros = (event) => {
        setDefectFiltroVigente("todo");
        setDefectFiltroErpyme("todo");
        setDefectFiltroSaldo("todo");
        setFiltroVigente("todo");
        setFiltroErpyme("todo");
        setFiltroSaldo("todo");
    }

    return (
        <div className='row'>
            <div className='card no-print'>
                <div className="card-divider">
                    <label htmlFor="filtroVigente">Selecciona Vigencia
                        <select className="form-select" id="filtroVigente" name="filtroVigente"
                        value={defectFiltroVigente} onClick={(e)=>HandlerFiltroVigente(e)}>
                            <option value="todos">Selecciona Vigencia...</option>
                            <option value="Vigente">Vigente</option>
                            <option value="No Vigente">No Vigente</option>
                        </select>
                    </label>
                    <label htmlFor="erpyme">Selecciona ERPyme
                        <select className="form-select" id="erpyme" name="erpyme"
                        value={defectFiltroErpyme} onClick={(e)=>HandlerFiltroErpyme(e)}>
                            <option value="todos">Selecciona Erpyme...</option>
                            <option value="Está en Erpyme">Está en Erpyme</option>
                            <option value="No está en Erpyme">No está en Erpyme</option>
                        </select>
                    </label>
                    <label htmlFor="saldo">Con Saldo?
                        <select className="form-select" id="saldo" name="saldo"
                        value={defectFiltroSaldo} onClick={(e)=>HandlerFiltroSaldo(e)}>
                            <option value="todos">Selecciona Saldo...</option>
                            <option value="Con Saldo">Con Saldo</option>
                            <option value="Todo Pagado">Todo Pagado</option>
                        </select>
                    </label>
                    {defectFiltroVigente != "todos" || defectFiltroErpyme != "todos" || defectFiltroSaldo != "todos" ? (
                    <div className="card-divider align-center"><FiAlertOctagon/>&nbsp; &nbsp;Hay Filtros Aplicados <a class="clear button warning align-right" onClick={(e)=>HandlerResetFiltros(e)}>reset filtros</a></div>
                    ):null}
                </div>
            </div>
        </div>
    );
}

export default FiltroListaClientes;