import React, { useState, useContext } from 'react';
import { Context } from "../../../store/AppContext";
import { useHistory } from 'react-router';


const Notas = ({ clienteDtCliqueado, setDSetectorCambios}) => {
    const { store, actions } = useContext(Context);
    const [nota, setNota] = useState("");

    // Handler para Crear y submit Notas
    const HandlerNota = (event) => {
        setNota(event.target.value)
    };
    const HandlerAgregarNota = (event) => {
        actions.crearNota(nota, clienteDtCliqueado.id);
        setDSetectorCambios(true);
        setNota("");
    };

    return (
        <div className="card" >
                <div className="card-divider">
                    <h4>Notas</h4>
                </div>
                <div className="card-section">
                    ...No hay Notas...
                    <table className="table">
                        <tbody>
                        {(store.nota != null) ? (
                            store.nota.map((object, i) =>
                                <tr key={i}>
                                    <td>{object.comentario}</td>
                                </tr>)
                        ) : (null)}
                        </tbody>
                    </table>
                </div>
                <label>
                    Quieres agregar algún comentario?
                <textarea placeholder="Escribe aquí tu Comentario o Nota" value={nota} onChange={(e)=>HandlerNota(e)}></textarea>
                </label>
                <div className='button-group align-right'>
                    <button className="submit button" onClick={(e)=>HandlerAgregarNota(e)}>Agregar Nota</button>
                </div>
            </div>
    );
}

export default Notas;