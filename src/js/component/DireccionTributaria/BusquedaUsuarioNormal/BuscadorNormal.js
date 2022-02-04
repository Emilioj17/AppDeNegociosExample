import React, { useContext, useRef } from 'react';
import { Context } from '../../../store/AppContext';


//Esta funcion es la que genera el buscador de clientes. Es bien sencilla, el unico handler que tiene
// est para asignar lo que se escriba con un onChange. 

const BuscadorNormal = ({ setClienteDtBuscado }) => {
    const { store, actions } = useContext(Context);
    const Busqueda = useRef(null);
    
    const HandlerOnClick = (event) => {
        setClienteDtBuscado(Busqueda.current.value);
    };

    return (
        <div className='cell small-10'>
            <div className='grid-x grid-margin-x'>
                {(store.usuarioActual != null) ? (
                    (store.usuarioActual.tipo === "Administrador" || store.usuarioActual.tipo === "Cobranza") ? (
                        null
                    ) :
                        <>
                            <input className='cell small-10' type="text" placeholder="Ingresa tu Busqueda (Rut Empresa sin puntos, razon social, correo, Nombre o Rut Representante)" name="Buscador" ref={Busqueda}/>
                            <button class="cell small-2 submit success button" onClick={(e) => HandlerOnClick(e)}>Buscar</button>
                        </>
                ): null}
            </div>
        </div>
    );
}

export default BuscadorNormal;