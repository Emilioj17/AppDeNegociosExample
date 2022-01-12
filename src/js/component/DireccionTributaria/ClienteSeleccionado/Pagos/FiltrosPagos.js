import React from 'react';

const FiltroPagos = ({setFiltroYear, setFiltroMesInicio, setFiltroMesTermino, setFiltroSaldo}) => {

    const HandlerSeleccionYear = (event) => {
        setFiltroYear(event.target.value);
    }

    const HandlerSeleccionMesInicio = (event) => {
        setFiltroMesInicio(event.target.value);
    }

    const HandlerSeleccionMesTermino = (event) => {
        setFiltroMesTermino(event.target.value);
    }

    const HandlerSeleccionSaldo = (event) => {
        setFiltroSaldo(event.target.value);
    }

    return (
        <div className='card no-print'>
            <div className="card-divider">
                <label htmlFor="year">Selecciona Año
                    <select className="form-select" id="year" name="year" onClick={(e)=>HandlerSeleccionYear(e)}>
                        <option value="todos" selected>Desde el inicio de los tiempos...</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </label>
                <label htmlFor="mes">Selecciona un Rango
                    <select className="form-select" id="mes" name="mes" disabled onClick={(e)=>HandlerSeleccionMesInicio(e)}>
                        <option selected>Desde este mes...</option>
                        <option value="enero">Enero</option>
                        <option value="febrero">Febrero</option>
                        <option value="marzo">Marzo</option>
                        <option value="abril">Abril</option>
                        <option value="mayo">Mayo</option>
                        <option value="junio">Junio</option>
                        <option value="julio">Julio</option>
                        <option value="agosto">Agosto</option>
                        <option value="septiembre">Septiembre</option>
                        <option value="octubre">Octubre</option>
                        <option value="noviembre">Noviembre</option>
                        <option value="diciembre">Diciembre</option>
                    </select>
                    <select className="form-select" id="mes" name="mes" disabled onClick={(e)=>HandlerSeleccionMesTermino(e)}>
                        <option selected>Hasta este mes...</option>
                        <option value="enero">Enero</option>
                        <option value="febrero">Febrero</option>
                        <option value="marzo">Marzo</option>
                        <option value="abril">Abril</option>
                        <option value="mayo">Mayo</option>
                        <option value="junio">Junio</option>
                        <option value="julio">Julio</option>
                        <option value="agosto">Agosto</option>
                        <option value="septiembre">Septiembre</option>
                        <option value="octubre">Octubre</option>
                        <option value="noviembre">Noviembre</option>
                        <option value="diciembre">Diciembre</option>
                    </select>
                </label>
                <label htmlFor="saldo">Selecciona Saldo
                    <select className="form-select" id="saldo" name="saldo" onClick={(e)=>HandlerSeleccionSaldo(e)}>
                        <option value="todos" selected>Con y Sin Saldos</option>
                        <option value="conSaldo">Con Saldo</option>
                        <option value="sinSaldo">Sin Saldo</option>
                    </select>
                </label>
            </div>
        </div>
    );
}

export default FiltroPagos;