import React, { useState, useContext } from 'react';
import { Context } from "../../../store/AppContext";


const Notas = ({ clienteDtCliqueado, setDSetectorCambiosNotas}) => {
    const { store, actions } = useContext(Context);
    const [nota, setNota] = useState("");
    const fechaActual = new Date();

    // Handler para Crear y submit Notas
    const HandlerNota = (event) => {
        setNota(event.target.value)
    };
    const HandlerAgregarNota = (event) => {
        let fechaComentario = fechaActual.toLocaleDateString();
        actions.crearNota(nota, fechaComentario, clienteDtCliqueado.id);
        setDSetectorCambiosNotas(true);
        setNota("");
    };

    return (
        <div className="card" >
            <div className="card-divider">
                <h4>Notas</h4>
            </div>
            <div className="card-section notas">
                <table className="table">
                    <tbody>
                    {(store.nota != null) ? (
                        store.nota.map((object, i) =>
                            <tr key={i}>
                                <td>{object.comentario}</td>
                                <td>{object.fechaComentario}</td>
                            </tr>)
                    ) : (null)}
                        {store.nota == "" ? (
                            <tr>
                                <td>No hay notas</td>
                            </tr>): null}
                    </tbody>
                </table>
            </div>
            <div className='column'>
                <label>
                    Quieres agregar algún comentario?
                <textarea placeholder="Escribe aquí tu Comentario o Nota" value={nota} onChange={(e)=>HandlerNota(e)}></textarea>
                </label>
                <div className='button-group align-right'>
                    <button className="submit button" onClick={(e)=>HandlerAgregarNota(e)}>Agregar Nota</button>
                </div>
            </div>
        </div>
    );
}

export default Notas;