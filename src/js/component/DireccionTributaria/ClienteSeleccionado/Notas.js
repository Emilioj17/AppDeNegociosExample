import React, { useState, useContext } from 'react';


const Notas = ({clienteDtCliqueado}) => {

    return (
        <div className="card" >
                <div className="card-divider">
                    <h4>Notas</h4>
                </div>
                <div className="card-section">
                    ...No hay Notas...
                    <table className="table">
                        <tbody>
                            {clienteDtCliqueado.notas.map((object, i) => 
                                <tr key={i}>
                                    <td>{object.comentario}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
                <label>
                    Quieres agregar algún comentario?
                    <textarea placeholder="Escribe aquí tu Comentario o Nota"></textarea>
                </label>
                <div className='button-group align-right'>
                    <button className="submit button">Agregar Nota</button>
                </div>
            </div>
    );
}

export default Notas;