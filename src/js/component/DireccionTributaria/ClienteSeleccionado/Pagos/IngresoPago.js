import React, { useState, useContext } from 'react';
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
        numeroTransferencia: null,
        facturaNumero: null,
        comentario: null,
        fechaIngresoPago: year.toLocaleDateString()
    });
    const [alert, setAlert] = useState(false);

    const HandlerCerrar = (event) => {
        setDisabled(false);
        setCrearPagos(false);
    }

    const HandlerCrearPago = (event) => {
        console.log(datos);
        if (datos.montoPagado === null || datos.numeroTransferencia === null) {
            setAlert(true)
        } else {
            actions.crearPago(datos.year, datos.mes, datos.numeroTransferencia, datos.montoPagado, datos.montoCobrado, datos.facturaNumero, datos.comentario, datos.fechaIngresoPago, store.infoClienteDt.id)
            setAlert(false);
            setDSetectorCambios(true);
            setTimeout(() => { setCrearPagos(false) }, 200);
            setDisabled(false);
        }
    }

    const HandlerCompletarDatos = (event) => {
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
                        <select className="form-select" id="year" name="year"
                        onChange={(e) => HandlerCompletarDatos(e)}>
                            <option selected>Seleciona...</option>
                            <option value="2019" selected={(year.getFullYear()===2019)?(true):(false)}>2019</option>
                            <option value="2020" selected={(year.getFullYear()===2020)?(true):(false)}>2020</option>
                            <option value="2021" selected={(year.getFullYear()===2021)?(true):(false)}>2021</option>
                            <option value="2022" selected={(year.getFullYear()===2022)?(true):(false)}>2022</option>
                            <option value="2023" selected={(year.getFullYear()===2023)?(true):(false)}>2023</option>
                            <option value="2024" selected={(year.getFullYear()===2024)?(true):(false)}>2024</option>
                        </select>
                    </label>
                    <label htmlFor="mes">Selecciona mes<span style={{color:"red"}}>*</span>
                        <select className="form-select" id="mes" name="mes"
                        onChange={(e) => HandlerCompletarDatos(e)}>
                            <option selected>Seleciona...</option>
                            <option value="Enero" selected={(datos.mes==="Enero")?(true):(false)}>Enero</option>
                            <option value="Febrero" selected={(datos.mes==="Febrero")?(true):(false)}>Febrero</option>
                            <option value="Marzo" selected={(datos.mes==="Marzo")?(true):(false)}>Marzo</option>
                            <option value="Abril" selected={(datos.mes==="Abril")?(true):(false)}>Abril</option>
                            <option value="Mayo" selected={(datos.mes==="Mayo")?(true):(false)}>Mayo</option>
                            <option value="Junio" selected={(datos.mes==="Junio")?(true):(false)}>Junio</option>
                            <option value="Julio" selected={(datos.mes==="Julio")?(true):(false)}>Julio</option>
                            <option value="Agosto" selected={(datos.mes==="Agosto")?(true):(false)}>Agosto</option>
                            <option value="Septiembre" selected={(datos.mes==="Septiembre")?(true):(false)}>Septiembre</option>
                            <option value="Octubre" selected={(datos.mes==="Octubre")?(true):(false)}>Octubre</option>
                            <option value="Noviembre" selected={(datos.mes==="Noviembre")?(true):(false)}>Noviembre</option>
                            <option value="Diciembre" selected={(datos.mes==="Diciembre")?(true):(false)}>Diciembre</option>
                        </select>
                    </label>
                    <label htmlFor="montoCobrado">Monto Cobrado
                        <input type="number" name="montoCobrado" defaultValue="9900"
                        onChange={(e) => HandlerCompletarDatos(e)}/>
                    </label>
                </div>
                <div className="card-divider">
                    <label htmlFor="montoPagado">Monto Pagado<span style={{color:"red"}}>*</span>
                        <input type="number" name="montoPagado"
                        onChange={(e) => HandlerCompletarDatos(e)}/>
                    </label>
                    <label htmlFor="numeroTransferencia">N° Transferencia<span style={{color:"red"}}>*</span>
                        <input type="text" name="numeroTransferencia"
                        onChange={(e) => HandlerCompletarDatos(e)}/>
                    </label>
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