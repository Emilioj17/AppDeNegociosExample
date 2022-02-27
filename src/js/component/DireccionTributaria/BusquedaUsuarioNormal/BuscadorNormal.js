import React, { useContext, useRef } from 'react';
import { Context } from '../../../store/AppContext';


//Esta funcion es la que genera el buscador de clientes. Es bien sencilla, el unico handler que tiene
// est para asignar lo que se escriba con un onChange. 

const BuscadorNormal = ({ setClienteDtBuscado, buscando, setBuscando }) => {
    const { store, actions } = useContext(Context);
    const Busqueda = useRef(null);
    
    const HandlerOnChange = (event) => {
        setClienteDtBuscado(Busqueda.current.value);
    };

    const HandlerOnPress = (event) => {
        if (event.key === "Enter") {
            if (event.target.value != "" || event.target.value != null) {
                if (event.target.value === "gmail"
                    || event.target.value === "gmail.com"
                    || event.target.value === "@gmail.com"
                    || event.target.value === "@hotmail.com"
                    || event.target.value === "hotmail.com"
                    || event.target.value === "hotmail"
                    || event.target.value === ".com"
                    || event.target.value === "com") {
                    alert("Tu Busqueda es muy Amplia, busca con otro termino");
                    return;
                }
                if (event.target.value.length <= 4) {
                    alert("Escribe al menos 5 carácteres para tu búsqueda");
                    return;
                } else {
                    buscando ? setBuscando(true) : setBuscando(true);
                    actions.getBusquedaDt(event.target.value);
                }
                
            }
        }
    };

    return (
        <div className='cell small-10'>
            <div className='grid-x grid-margin-x'>
                {(store.usuarioActual != null) ? (
                    (store.usuarioActual.tipo === "Administrador" || store.usuarioActual.tipo === "Cobranza") ? (
                        null
                    ) :
                        <>
                            <input className='cell small-12' type="text"
                                onChange={(e) => HandlerOnChange(e)}
                                onKeyDown={(e)=> HandlerOnPress(e)}
                                placeholder="Ingresa tu Busqueda (Rut Empresa sin puntos, razon social, correo, Nombre o Rut Representante)" name="Buscador" ref={Busqueda} />
                        </>
                ): null}
            </div>
        </div>
    );
}

export default BuscadorNormal;