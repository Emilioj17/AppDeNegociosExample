import React, { useContext } from 'react';
import { Context } from '../../store/AppContext';


//Esta funcion es la que genera el buscador de clientes. Es bien sencilla, el unico handler que tiene
// est para asignar lo que se escriba con un onChange.

const Buscador = ({ setClienteDtBuscado }) => {
    const { store, actions } = useContext(Context);

    const HandlerOnChange = (event) => {  //Setea cual es la busqueda a hacer, pero botónd e buscar está en vista superior
        setClienteDtBuscado(event.target.value);
    };

    const HandlerOnPress = (event) => {  //Hace la busqueda ingresada, al hacer Enter.
        if (event.key === "Enter") {
            actions.getBusquedaDt(event.target.value);
        }
    };

    return (
        <div className='cell small-10'>
            <div className='grid-x grid-margin-x'>
                {(store.usuarioActual != null) ? (
                    (store.usuarioActual.tipo === "Administrador" || store.usuarioActual.tipo === "Cobranza" || store.usuarioActual.tipo === "Super Administrador") ? (
                        <>
                            <input className='cell small-12' type="text" placeholder="Ingresa tu Busqueda" name="Buscador" onChange={(e) => HandlerOnChange(e)} onKeyDown={(e)=>HandlerOnPress(e)}/>
                        </>

                    ) : null ): null}
            </div>
        </div>
    );
}

export default Buscador;