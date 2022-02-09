import React, { useContext } from 'react';
import { Context } from '../../store/AppContext';


//Esta funcion es la que genera el buscador de clientes. Es bien sencilla, el unico handler que tiene
// est para asignar lo que se escriba con un onChange.

const Buscador = ({ setClienteDtBuscado }) => {
    const { store, actions } = useContext(Context);

    const HandlerOnChange = (event) => {
        setClienteDtBuscado(event.target.value);
    };

    return (
        <div className='cell small-10'>
            <div className='grid-x grid-margin-x'>
                {(store.usuarioActual != null) ? (
                    (store.usuarioActual.tipo === "Administrador" || store.usuarioActual.tipo === "Cobranza" || store.usuarioActual.tipo === "Super Administrador") ? (
                        <>
                            <label class="cell small-2" htmlFor="Buscador">Buscador</label>
                            <input className='cell small-10' type="text" placeholder="Ingresa tu Busqueda" name="Buscador" onChange={(e) => HandlerOnChange(e)} />
                        </>

                    ) : null ): null}
            </div>
        </div>
    );
}

export default Buscador;