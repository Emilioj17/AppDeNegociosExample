import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../../../../store/AppContext";

//Este Formulario es de Direccion Tributaria (Modificar Cliente Existente)

const IngresoPago = ({ setCrearPagos, setDisabled, setDSetectorCambios }) => {
    const mesesNombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const year = new Date();
    const { store, actions } = useContext(Context);
    const [datos, setDatos] = useState({
        year: year.getFullYear(),
        mes: mesesNombres[year.getMonth()],
        montoCobrado: 9900,
        montoPagado: null,
        mesesPagados: 1,
        numeroTransferencia: null,
        facturaNumero: null,
        comentario: null,
        fechaIngresoPago: year.toLocaleDateString()
    });
    const [alert, setAlert] = useState(false);
    const [mesesPagados, setMesesPagados] = useState("1");

    useEffect(() => {
        actions.getClienteDt(store.infoClienteDt.id);
    }, []);

    const HandlerCerrar = (event) => {
        setDisabled(false);
        setCrearPagos(false);
    }

    const HandlerCrearPago = (event) => {
        if (datos.montoPagado === null || datos.numeroTransferencia === null) {
            setAlert(true)
        } else {
            actions.editarMesesPagadosClienteDt(store.infoClienteDt.id, parseInt(mesesPagados)+parseInt(store.infoClienteDt.mesesPagados))
            actions.crearPago(datos.year, datos.mes, datos.numeroTransferencia, datos.montoPagado, datos.montoCobrado, datos.mesesPagados, datos.facturaNumero, datos.comentario, datos.fechaIngresoPago, store.infoClienteDt.id)
            setAlert(false);
            setDSetectorCambios(true);
            setTimeout(() => { setCrearPagos(false) }, 200);
            setDisabled(false);
        }
    }

    const HandlerCompletarDatos = (event) => {
        if (event.target.name === "mesesPagados") {
            if (event.target.value === "") {
                setMesesPagados(null)
            }
            setMesesPagados(event.target.value)
        }

        setDatos({ ...datos, [event.target.name]: event.target.value })

        if (event.target.value === "") {
            setDatos({ ...datos, [event.target.name]: null })
        }
    };

    return (
        <div className='DivTerciario text-center'>
            <div className="card">
                <h4>Vas a Crear un Pago</h4>
                <div className="card-divider">
                    <label className="form-label" htmlFor='year'>Seleciona Año<span style={{color:"red"}}>*</span>
                        <select className="form-select" id="year" name="year" defaultValue={year.getFullYear()}
                        onChange={(e) => HandlerCompletarDatos(e)}>
                            <option>Seleciona...</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                    </label>
                    <label htmlFor="mes">Selecciona mes<span style={{color:"red"}}>*</span>
                        <select className="form-select" id="mes" name="mes" defaultValue={datos.mes}
                        onChange={(e) => HandlerCompletarDatos(e)}>
                            <option>Seleciona...</option>
                            <option value="Enero">Enero</option>
                            <option value="Febrero">Febrero</option>
                            <option value="Marzo">Marzo</option>
                            <option value="Abril">Abril</option>
                            <option value="Mayo">Mayo</option>
                            <option value="Junio">Junio</option>
                            <option value="Julio">Julio</option>
                            <option value="Agosto">Agosto</option>
                            <option value="Septiembre">Septiembre</option>
                            <option value="Octubre">Octubre</option>
                            <option value="Noviembre">Noviembre</option>
                            <option value="Diciembre">Diciembre</option>
                        </select>
                    </label>
                    <label htmlFor="mesesPagados">Cuantos meses?<span style={{color:"red"}}>*</span>
                        <input type="number" min="1" name="mesesPagados" defaultValue="1"
                        onChange={(e) => HandlerCompletarDatos(e)}/>
                    </label>
                </div>
                <div className="card-divider">
                    <label htmlFor="montoPagado">Monto Pagado<span style={{color:"red"}}>*</span>
                        <input type="number" min="0" name="montoPagado"
                        onChange={(e) => HandlerCompletarDatos(e)}/>
                    </label>
                    <label htmlFor="montoCobrado">Monto Cobrado<span style={{color:"red"}}>*</span>
                        <input type="number" name="montoCobrado" min="0" defaultValue="9900"
                        onChange={(e) => HandlerCompletarDatos(e)}/>
                    </label>
                    <label htmlFor="numeroTransferencia">N° Transferencia<span style={{color:"red"}}>*</span>
                        <input type="text" name="numeroTransferencia"
                        onChange={(e) => HandlerCompletarDatos(e)}/>
                    </label>
                </div>
                <div className="card-divider">
                    <label htmlFor="facturaNumero">N° Factura
                        <input type="text" name="facturaNumero"
                        onChange={(e) => HandlerCompletarDatos(e)}/>
                    </label>
                </div>
                <div className="card-divider align-center">
                    <label htmlFor="fechaPago">Comentario
                        <textarea
                            cols="50" rows="1" maxLength="100"
                            placeholder="Escribe aquí tu Comentario o Nota" name="comentario" onChange={(e) => HandlerCompletarDatos(e)}></textarea>
                    </label>
                </div>
                {alert ? (<div className="align-center" style={{backgroundColor: "tomato"}}>Hay algunos Datos No ingresados. Revisar.</div>):(null)}
                <div className='button-group align-center card-divider'>
                    <button className="submit button success" onClick={(e)=>HandlerCrearPago(e)}>Crear Pago</button>
                    <button className="submit button" onClick={(e)=>HandlerCerrar(e)}>Cancelar</button>
                </div>
            </div>
        </div>
    )

}

export default IngresoPago;